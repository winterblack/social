class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email or password'], status: 401
    end
  end

  def destroy
    if @user = current_user
      @user.regenerate_token
      session[:token] = nil
      render json: nil, status: 200
    else
      render json: ['Not signed in'], status: 404
    end
  end
end
