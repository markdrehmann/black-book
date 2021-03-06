class UsersController < ApplicationController
  def index
    users = User.all
    render json: users, :include => {
    :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id]}
  }, :except => [:created_at, :updated_at] 
  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id], :include => [:notes => {:only => [:id, :text, :contact_id]}]
      }]
    else
      render json: { errors: "Login Failed! Womp womp." }
    end
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id], :include => [:notes => {:only => [:id, :text, :contact_id]}]
      }]
  end 

  def create
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      render json: user, except: [:created_at, :updated_at]
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def destroy
    user = User.find_by(id: paramd[:id])
    user.destroy
    render json: user
  end
end