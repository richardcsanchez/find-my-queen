class DragQueenSerializer < ActiveModel::Serializer
  attributes :id, :name, :city_id, :style_id, :bio
  has_many :styles
  belongs_to :city
end
