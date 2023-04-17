class PostsController < ApplicationController
  def index
      @posts = Post.all
  end

  def new
  end

  def create
    @post = Post.new
    @post.title = params[:post_title]
    @post.sub_title = params[:post_subTitle]
    @post.content = params[:post_content]
    @post.save
    redirect_to '/posts/index'
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.title = params[:post_title]
    @post.sub_title = params[:post_subTitle]
    @post.content = params[:post_content]
    @post.save
    
    redirect_to '/posts/index'
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to '/posts/index'
  end
end
