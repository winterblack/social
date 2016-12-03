class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user

  private

  def current_user
    @current_user ||= User.find_by(token: session[:token])
  end

  def login(user)
    session[:token] = user.token
  end
end
