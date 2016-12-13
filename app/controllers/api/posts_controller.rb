class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:user, :likes, {comments: :user}).all.order("created_at DESC")
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

  def liked?(post)
    i = 0
    while i < @post.likes.length
      if @post.likes[i].user_id == current_user.id
        liked = true
        @post.likes[i].destroy
        return true
      end
      i+=1
    end
    return false
  end

  def toggle_like
    @post = Post.find(params[:id])
    if liked?(@post)
      redirect_to api_post_url(@post.id)
    else
      like = current_user.likes.new(post_id: params[:id])
      if like.save
        redirect_to api_post_url(@post.id)
      else
        render json: ['something went wrong'], status: 422
      end
    end
  end

  def create_comment
    @post = Post.find(params[:id])
    comment = @post.comments.new(body: comment_params[:body] ,user_id: current_user.id)
    if comment.save
      redirect_to api_post_url(@post.id)
    else
      render json: comment.errors.full_messages
    end
  end

  private
  def post_params
    params.require(:post).permit(:picture_url, :location, :description)
  end

  def like_params
    params.require(:like).permit(:like_id)
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
