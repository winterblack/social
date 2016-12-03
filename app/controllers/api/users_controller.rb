class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(params.require(:user).permit(:username, :password))
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end
end
