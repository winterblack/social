Rails.application.routes.draw do
  root "root#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index]
  end
end
