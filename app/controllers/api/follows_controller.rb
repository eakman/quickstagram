class Api::FollowsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @followers = @user.followers.includes(:follower)
    @follows = @user.follows.includes(:followed)
  end
end
