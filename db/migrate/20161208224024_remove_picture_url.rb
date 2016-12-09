class RemovePictureUrl < ActiveRecord::Migration
  def change
    remove_column :posts, :picture_url, :string
  end
end
