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

  def self.search_hash_tags(hash_tag)
    HashTag.select('hash_tag').distinct
            .where("LOWER(hash_tag) ~ ?", hash_tag)
  end

  def self.get_associated_posts(hash_tag)
    post_ids = HashTag.where(hash_tag: "##{hash_tag}").select('post_id')
    Post.where("id IN (?)", post_ids);
  end
end
