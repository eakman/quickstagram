# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime
#  updated_at          :datetime
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_attached_file :avatar, default_url: lambda { |image| ActionController::Base.helpers.asset_path("social.png")}, processors: [:compression]
    validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/




    after_initialize :ensure_session_token
    attr_reader :password

    has_many :posts
    has_many :likes
    has_many :comments

    has_many :follows,
      class_name: :Follow,
      foreign_key: :follower_id,
      primary_key: :id

    has_many :followers,
      class_name: :Follow,
      foreign_key: :followed_id,
      primary_key: :id

    has_many :followed_users,
      through: :follows,
      source: :followed

    has_many :followed_posts,
      through: :followed_users,
      source: :posts

    def self.get_followed_posts(user, page_number)
      follows = user.follows.select('followed_id')
      Post.where('user_id = ? OR user_id IN( ? )', user.id, follows)
        .includes(:user, :likes, {comments: :user})
        .order('created_at DESC')
        .page(page_number).per(3)
    end

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def self.generate_session_token
      SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      (user && user.is_password?(password)) ? user : nil
    end

end
