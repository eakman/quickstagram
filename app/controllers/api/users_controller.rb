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

  def show
    @user = User.find(params[:id])

    if @user
      render :user
    else
      render json: ['something went wrong']
    end
  end

  def index
    @users = User.all
    render :index
  end

  def update
    ##change profile pic
  end

  def toggle_follow
    #make current user follow/unfollow a given user
  end

  def suggested_follows
    #people who are following the current user where they are not following back
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :photo_url)
  end
end
