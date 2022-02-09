Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :reviews
  resources :restaurants
  post "/login",  to: "users#login"
  delete "/logout", to: "users#logout"
  resources :users
  get 'reviews/by-user-id/:user_id', to: "reviews#by_user_id"
  
end
