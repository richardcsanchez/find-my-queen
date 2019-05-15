class CreateDragQueens < ActiveRecord::Migration[5.2]
  def change
    create_table :drag_queens do |t|
      t.string :name
      t.integer :city_id
      t.integer :style_id
      t.text :bio
      t.string :img_url

      t.timestamps
    end
  end
end
