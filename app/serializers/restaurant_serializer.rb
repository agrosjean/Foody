class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :score
end
