class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :score, :open_time, :closed_time, :address, :image_url
end
