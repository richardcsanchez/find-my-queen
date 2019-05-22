class RenameCity < ActiveRecord::Migration[5.2]
  def change
    rename_column :drag_queens, :city, :hometown
  end
end
