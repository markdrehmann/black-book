class UsersController < ApplicationController
  def index
    users = User.all
    render json: users, :include => {
    :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id]}
  }, :except => [:created_at, :updated_at] 
  end

  def show
    user = User.find_by(id: params[:id])
    render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id]},
      :notes => {:only => [:id, :text, :contact_id]}
    ]
  end # THIS HAS ALL OF THE INFO I WANT, HOWEVER I WISH NOTES WERE NESTED WITHIN THEIR CONTACTS, BUT THEY'RE IN A SEPARATE ARRAY

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

# render json: users, include: {id:, first_name:, last_name:, phone:, email:, address:, user_id:, notes: {include: :text}}