class NotesController < ApplicationController
  def create
    note = Note.new(
      text: params[:text],
      contact_id: params[:contact_id]
    )
    if note.save
      user = note.contact.user
      render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id], :include => [:notes => {:only => [:id, :text, :contact_id]}]
      }]
    else
      render json: { errors: contact.errors.full_messages }
    end
  end

  def destroy
    note = Note.find_by(id: params[:id])
    user = note.contact.user
    note.destroy
    render json: user, :include => [
      :contacts => {:only => [:id, :first_name, :last_name, :phone, :email, :address, :user_id], :include => [:notes => {:only => [:id, :text, :contact_id]}]
      }]
  end
end
