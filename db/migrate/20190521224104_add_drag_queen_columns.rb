class AddDragQueenColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :drag_queens, :city, :string
    add_column :drag_queens, :style, :string
  end
end
