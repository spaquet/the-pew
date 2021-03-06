class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text       :content
      t.string     :title
      t.references :user,    null: false, foreign_key: true
      t.integer    :level,   null: false, default: 10

      t.timestamps
    end

    add_index :messages, :level
  end
end
