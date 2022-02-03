class UsersController < ApplicationController
    def create
        new_user = User.new( user_params )
        
        if new_user.save
            render json: new_user, status: 201
        else
            render json: { "errors": new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user
            if user.authenticate(params[:password])
                # correct password
                session[:user_id] = user.id
                render json: user, status: 200
            else
                # wrong password
                render json: {"message": 'Incorrect Password'}, status: :bad_request
            end
        else
            render json: {"message": 'User not found'}, status: :not_found
        end
    end

    def logout
        session.delete :user_id
    end

    def index
        render json: User.all
    end

    def update
        user = find_user # get the user to update from db

        if user.update(user_params) # update the user
            render json: user, status: 201
        else
            render json: { "errors": user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = find_user
        if user
            user.destroy
        else 
            render json: { "error": "User not found"}, status: :not_found
        end
    end

    def current_user
        User.find_by(id: params[:id])
    end

    private

    def user_params
        params.permit( :name, :email, :password)
    end

    def find_user
        User.find_by(id: params[:id])
    end
end
