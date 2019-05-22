class DragQueenSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :style, :bio, :img_url
  # has_many :styles
  # belongs_to :city
end
