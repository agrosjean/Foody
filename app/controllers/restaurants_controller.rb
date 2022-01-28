class RestaurantsController < ApplicationController
    # All actions CRUD

    # Create Restaurant
    def create
        new_restaurant = Restaurant.new( restaurant_params )
        
        if new_restaurant.save
            render json: new_restaurant, status: 201
        else
            render json: { "errors": new_restaurant.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # Read Restaurant
    def index
        render json: Restaurant.all
    end

    # Delete
    def destroy
        restaurant = find_restaurant
        if restaurant
            restaurant.destroy
        else 
            render json: { "error": "Restaurant not found"}, status: :not_found
        end
    end

    # Update
    def update
        restaurant = find_restaurant # get the restaurant to update from db

        if restaurant.update(restaurant_params) # update the restaurant
            render json: restaurant, status: 201
        else
            render json: { "errors": restaurant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: find_restaurant
    end

    private

    def restaurant_params
        params.permit( :name, :cuisine, :score)
    end

    def find_restaurant
        Restaurant.find_by(id: params[:id])
    end
end
