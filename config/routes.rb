Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    resources :users, only: [:update, :show, :create, :index] do
      member do
        post :toggle_follow
        get :get_user_posts
      end
      get "search", on: :collection
      resources :posts, only: [:index]
      resources :follows, only: [:index]
    end

    resources :posts, only: [:show, :create] do
      member do
        post :toggle_like
        post :create_comment
      end
      get "posts_by_tag", on: :collection
    end

    resource :session, only: [:create, :destroy]

    resources :hash_tags, only: :none do
      get "search", on: :collection
    end

  end
end
