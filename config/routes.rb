Rails.application.routes.draw do
  
  resources :reviews
  resources :restaurants
  post "/login",  to: "users#login"
  delete "/logout", to: "users#logout"
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
