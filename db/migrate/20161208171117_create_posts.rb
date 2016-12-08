class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :picture_url, null: false
      t.integer :user_id, null: false
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end
