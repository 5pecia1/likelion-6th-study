Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/attack', to: 'home#attack'
  
  get '/defense' => 'home#defense'
end
