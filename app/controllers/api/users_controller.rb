class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    @users = User.where("LOWER(username) ~ ?", params[:query].downcase)
    @hash_tags = HashTag.select('hash_tag').distinct
            .where("LOWER(hash_tag) ~ ?", params[:query].downcase)
    @stuff = @users + @hash_tags
    render :search
  end

  def show
    @user = User.find(params[:id])
    if @user
        @is_following = is_following?(@user, current_user.id)
        render :user
    else
      render json: ['something went wrong']
    end
  end

  def get_user_posts
    @user = User.find(params[:id])
    if @user
      @posts = @user.posts
      render 'api/posts/index2'
    else
      render json: ['no posts']
    end
  end

  def is_following?(user, other_user)
    user.followers.select('follower_id').map {|f| p f.follower_id}.include?(other_user)
  end

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(params[:id])
    if @user.update(avatar: user_params[:avatar])
      render :user
    else
      render json: @user.errors.full_messages
    end
  end

  def get_follow_id(user)
    id = current_user.id
    follow = user.followers.where("follower_id = #{id}")[0]
    if follow
      return follow.id
    else
      return false
    end
  end

  def toggle_follow
    @user = User.find(params[:id])
    follow_id = get_follow_id(@user)
    if follow_id
      @follow = Follow.find(follow_id)
      @follow.destroy
      @is_following = false
      render :user
    else
      @follow = Follow.new(follower_id: current_user.id, followed_id: @user.id)
      if @follow.save
        @is_following = true
        render :user
      else
        render json: ['unsuccessful follow']
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end


end
