# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Follow < ActiveRecord::Base
  validates :follower, :followed, presence: true

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id,
    primary_key: :id

  belongs_to :followed,
    class_name: :User,
    foreign_key: :followed_id,
    primary_key: :id

end
