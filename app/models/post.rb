# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  picture_url :string           not null
#  user_id     :integer          not null
#  description :text
#  location    :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Post < ActiveRecord::Base
  validates :picture_url, :user_id, presence: true

  ##look into styles
  has_attached_file :picture_url, default_url: "instagram-chicagofoodauthority.jpg"
  validates_attachment_content_type :picture_url, content_type: /\Aimage\/.*\z/

  belongs_to :user
end
