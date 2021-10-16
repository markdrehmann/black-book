class ContactsController < ApplicationController
  def index
    contacts = Contact.all
    # user contacts is mostly what I'll need, since I will never render ALL contacts on any one page.
    # user_contacts = contacts.select {|c| c.user_id == params[:user_id] }
    render json: contacts, except: [:created_at, :updated_at]
  end
end
