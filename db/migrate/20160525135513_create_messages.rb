class CreateMessages < ActiveRecord::Migration
  def change
    drop_table :messages if table_exists? :messages
    create_table :messages do |t|
      t.string :from_uid
      t.string :to_uid
      t.text :message
      t.string :thread_uid
      t.timestamps null: false
    end
  end
end
