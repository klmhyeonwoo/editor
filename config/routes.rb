Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/new'
  get 'posts/create'
  post 'posts/create'
  get 'posts/show'
  get 'posts/show/:id' => 'posts#show'
  get 'posts/edit'
  get 'posts/edit/:id' => 'posts#edit'
  get 'posts/update'
  post 'posts/update/:id' => 'posts#update'
  get 'posts/destroy'
  get 'posts/destroy/:id' => 'posts#destroy'

  get 'page/index'
  get '/index' => 'page#index'
  get '/write' => 'page#write'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
