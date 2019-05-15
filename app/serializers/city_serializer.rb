class CitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :drag_queens
end
