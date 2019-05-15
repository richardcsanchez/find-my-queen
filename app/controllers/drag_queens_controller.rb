class DragQueensController < ApplicationController
  before_action :find_queen, only: [:show, :update, :destroy]

  def index
    @drag_queens = DragQueen.all
    render json: @drag_queens
  end

  def show
    @drag_queen = DragQueen.find(params[:id])
    render json: @drag_queen
  end

  def create
    @drag_queen = DragQueen.new(drag_queen_params)

    if @drag_queen.save
      render json: @drag_queen
    else
      render json @drag_queen.errors
    end
  end

  def update
    if @drag_queen.update(drag_queen_params)
      render json: @drag_queen
    else
      render json: @drag_queen.errors
    end
  end

  def destroy
    if @event.destroy
      render json: {message: "Bye Queen!"}, status: 204
    else
      render json: {message @drag_queen.errors}, status:400
    end
  end

  private

    def find_queen
      @drag_queen = DragQueen.find(params[:id])
    end

    def drag_queen_params
      params.require(:drag_queen).permit(:name, :city, :styles, :img_url, :bio)
    end

  end
