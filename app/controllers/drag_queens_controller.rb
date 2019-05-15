class DragQueensController < ApplicationController

  def index
    @drag_queens = DragQueen.all
    render json: @drag_queens
  end

  def show
    @drag_queen = DragQueen.find(params[:id])
    render json: @drag_queen
  end
end
