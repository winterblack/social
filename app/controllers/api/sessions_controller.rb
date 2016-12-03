class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email or password'], status: 401
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['Not signed in'], status: 404
    end
  end
end
