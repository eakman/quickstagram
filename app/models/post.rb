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
require "open-uri"

class Post < ActiveRecord::Base
  validates :picture_url, :user_id, presence: true
#
  has_attached_file :picture_url, default_url: "instagram-chicagofoodauthority.jpg",
      styles: { medium: "618x500#" }, convert_options: { medium: "-quality 40" },
       processors: [:thumbnail, :compression]
  validates_attachment_content_type :picture_url, content_type: /\Aimage\/.*\z/

  def picture_from_url(url)
    self.picture_url = open(url)
  end

  belongs_to :user
  has_many :likes
  has_many :comments
end
