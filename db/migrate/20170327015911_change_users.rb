class ChangeUsers < ActiveRecord::Migration
  def change
  end
  change_column :users, :username, :string, unique: true
end
