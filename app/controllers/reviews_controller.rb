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

    # GET /reviews/by-user-id/:user_id
    def by_user_id
        user_id = params[:user_id]
        user = User.find_by(id: user_id) # user => user or nil
        if user
            render json: user.reviews.as_json(include: :restaurant)
        else
            render json: {error: "No user under this id"}, status: :not_found
        end
        # user_reviews = user.reviews
        # render json: user_reviews
    end

    private

    def review_params
        params.permit( :comment, :user_id, :restaurant_id)
    end

    def find_review
        Review.find_by(id: params[:id])
    end

end
