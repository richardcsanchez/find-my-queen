class DragQueen < ApplicationRecord
  has_many :styles
  has_one :city

  validates :name, presence: true
  validates :style, presence: true
  validates :city, presence: true
  validates :img_url, presence: true
end
