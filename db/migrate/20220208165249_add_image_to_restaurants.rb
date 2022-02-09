class AddImageToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :image_url, :string, default: ""
  end
end
