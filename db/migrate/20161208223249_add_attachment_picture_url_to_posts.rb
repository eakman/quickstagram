class AddAttachmentPictureUrlToPosts < ActiveRecord::Migration
  def self.up
    change_table :posts do |t|
      t.attachment :picture_url
    end
  end

  def self.down
    remove_attachment :posts, :picture_url
  end
end
