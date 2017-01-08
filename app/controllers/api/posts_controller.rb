class Api::PostsController < ApplicationController
  def index
    @posts = User.get_followed_posts(current_user, params[:page].to_i)
    @page = params[:page].to_i
    render :index2
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

  def posts_by_tag
    post_ids = HashTag.where(hash_tag: "##{params[:query]}").select('post_id')
    @posts = Post.where("id IN (?)", post_ids);
    render 'api/posts/index2'
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

  def register_tags(comment_body, post_id)
    comment_body.split(' ').each do |word|
      if word[0] === '#'
        HashTag.create(hash_tag: word, post_id: post_id)
      end
    end
  end

  def create_comment
    @post = Post.find(params[:id])
    register_tags(comment_params[:body], params[:id])
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
