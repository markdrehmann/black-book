class ContactsController < ApplicationController
  def index
    contacts = Contact.all
    # user_contacts = contacts.select {|c| c.user_id == params[:user_id] }
    render json: contacts, except: [:created_at, :updated_at]
  end

  def create
    contact = Contact.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      phone: params[:phone],
      email: params[:email],
      address: params[:address],
      user_id: params[:user_id]
    )
    if contact.save
      user = contact.user
      render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id], :include => [:notes => {:only => [:id, :text, :contact_id]}]
      }]
    else
      render json: { errors: contact.errors.full_messages}
    end
  end

  def update
    contact = Contact.find_by(id: params[:id])
  end

  def destroy
    byebug
    contact = Contact.find_by(id: params[:id])
    contact.destroy
    render json: contact
  end
end