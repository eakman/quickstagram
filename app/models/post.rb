# == Schema Information
#
# Table name: posts
#
#  id                       :integer          not null, primary key
#  user_id                  :integer          not null
#  description              :text
#  location                 :string
#  created_at               :datetime
#  updated_at               :datetime
#  picture_url_file_name    :string
#  picture_url_content_type :string
#  picture_url_file_size    :integer
#  picture_url_updated_at   :datetime
#

class Post < ActiveRecord::Base
  validates :picture_url, :user_id, presence: true

  has_attached_file :picture_url, default_url: "instagram-chicagofoodauthority.jpg", processors: [:compression]
  validates_attachment_content_type :picture_url, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :likes
  has_many :comments
end
