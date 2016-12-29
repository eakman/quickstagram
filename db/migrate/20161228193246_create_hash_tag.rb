class CreateHashTag < ActiveRecord::Migration
  def change
    create_table :hash_tags do |t|
      t.string :hash_tag, null: false
      t.integer :post_id, null: false

      t.timestamps
    end
  end
end
