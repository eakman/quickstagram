class RemoveProfilePictureUrl < ActiveRecord::Migration
  def change
    remove_column :users, :profile_pic_url, :string
  end
end
