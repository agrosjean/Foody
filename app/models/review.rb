class Review < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates :comment, length: { minimum: 1, maximum: 30 }

    after_create :update_restaurant_score
    after_destroy :update_restaurant_score

    def update_restaurant_score
        restaurant = self.restaurant
        if !restaurant 
            return 
        end
        sum_ratings = 0
        restaurant.reviews.each do |review|
            sum_ratings = sum_ratings + review.rating
        end

        num_ratings = restaurant.reviews.length
       if num_ratings == 0
           restaurant.score = 0
       elsif 
        restaurant.score = (sum_ratings.to_f / num_ratings.to_f).round(2) # round to 2 decimal places
       end
        
        restaurant.save
    end
end
