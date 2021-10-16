user_a = User.create(username: "Joe", password: "test")
user_b = User.create(username: "Tim", password: "test")

contact_a = Contact.create(first_name: "Joe", last_name: "Bigs", phone: "555-012-3456", email: "joe@bigs.com", address: "New York, NY", user: user_a)
contact_b = Contact.create(first_name: "Brian", last_name: "Smalls", phone: "555-012-9876", email: "brian@smalls.com", address: "New York, NY", user: user_a)

note_a = Note.create(text: "This is a sample note", contact: contact_a)