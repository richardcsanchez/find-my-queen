class DragQueen < ApplicationRecord
  # has_many :styles
  # belongs_to :city
  validates :name, presence: true
  validates :style, presence: true
  validates :hometown, presence: true
  validates :img_url, presence: true

end
