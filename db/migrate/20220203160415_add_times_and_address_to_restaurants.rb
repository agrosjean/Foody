class AddTimesAndAddressToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :open_time, :string
    add_column :restaurants, :closed_time, :string
    add_column :restaurants, :address, :string
  end
end
