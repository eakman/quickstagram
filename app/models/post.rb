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

  belongs_to :user 
end
