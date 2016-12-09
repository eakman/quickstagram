class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:user).all
    render :index
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :show
    else
      render(
        json: ['Something went wrong'],
        status: 422
      );
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  private
  def post_params
    params.require(:post).permit(:picture_url, :location, :description)
  end
end
