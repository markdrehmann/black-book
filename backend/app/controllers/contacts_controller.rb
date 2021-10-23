class ContactsController < ApplicationController
  def index
    contacts = Contact.all
    # user contacts is mostly what I'll need, since I will never render ALL contacts on any one page.
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
      render json: contact, except: [:created_at, :updated_at]
    else
      render json: { errors: contact.errors.full_messages}
    end
  end

  def destroy
    contact = Contact.find_by(id: params[:id])
    contact.destroy
    render json: contact
  end
end