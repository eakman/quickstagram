# == Schema Information
#
# Table name: hash_tags
#
#  id         :integer          not null, primary key
#  hash_tag   :string           not null
#  post_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class HashTag < ActiveRecord::Base
  validates :hash_tag, :post_id, presence: true
end
