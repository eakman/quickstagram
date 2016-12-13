Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:update, :show, :create, :index] do
      member do
        post :toggle_follow
        get :get_user_posts
      end
      resources :posts, only: [:index]
      resources :follows, only: [:index]
    end

    resources :posts, only: [:show, :create] do
      member do
        post :toggle_like
        post :create_comment

      end
    end

    resource :session, only: [:create, :destroy]


  end
end
