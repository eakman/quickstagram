class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render 'api/users/user', user: @user
    else
      render json: ['something went wrong']
    end
  end

  def destroy
    @user = current_user
    log_out()
    render 'api/users/user', user: @user
  end

end
