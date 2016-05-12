Rails.application.routes.draw do

  get '/', to: 'ideas#index'

  namespace :api, default: {format: :json} do
    namespace :v1 do
      resources :ideas, only: [:create, :index, :update, :destroy]
    end
  end

end
