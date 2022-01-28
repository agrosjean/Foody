class ReviewsController < ApplicationController
    def create
        new_review = Review.new( review_params )
        
        if new_review.save
            render json: new_review, status: 201
        else
            render json: { "errors": new_review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        review = find_review
        if review
            review.destroy
        else 
            render json: { "error": "Review not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.permit( :comment, :user_id, :restaurant_id)
    end

    def find_review
        Review.find_by(id: params[:id])
    end

end
