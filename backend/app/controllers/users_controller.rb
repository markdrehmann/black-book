class UsersController < ApplicationController
  def index
    users = User.all
    render json: users.to_json(:include => {
    :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id]},
  }, :except => [:created_at, :updated_at])
  end

  def create
    user = User.create(username: params[:username], password: params[:password])
    render json: user, except: [:created_at, :updated_at]
  end

  def destroy
    user = User.find_by(id: paramd[:id])
    user.destroy
    render json: user
  end
end
