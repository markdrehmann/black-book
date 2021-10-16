class ContactsController < ApplicationController
  def index
    contacts = Contact.all
    # user contacts is mostly what I'll need, since I will never render ALL contacts on any one page.
    # user_contacts = contacts.select {|c| c.user_id == params[:user_id] }
    render json: contacts, except: [:created_at, :updated_at]
  end

  def create
    contact = Contact.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
      phone: params[:phone],
      email: params[:email],
      address: params[:address],
      user_id: params[:user_id], # or potentially user.id?
    )
  end

  def destroy
    contact = Contact.find_by(id: params[:id])
    contact.destroy
    render json: contact
  end
end

# This is JS example for making new contact - from Git 'er Done
# function newTask(event) {
#   event.preventDefault();
#   let input = event.target.firstElementChild;
#   let description = input.value;
#   if (description) {
#     let id = input.getAttribute("data-list-id");
#     event.target.reset();
#     fetch("http://localhost:3000/tasks", {
#     method: "POST",
#     headers: { "Content-Type" : "application/json" },
#     body: JSON.stringify({"description" : `${description}`, "list_id" : `${id}`})
#     })
#     .then(response => response.json())
#     .then(task => console.log(task))
#     .then(() => getLists());
#   } else {
#     alert("Can't be blank!");
#   }
# }
