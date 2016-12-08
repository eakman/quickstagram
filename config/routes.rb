Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:update, :show, :create, :index] do
      resources :posts, only: [:index]
    end
    resources :posts, only: [:show, :create]
    resource :session, only: [:create, :destroy]
  end
end
