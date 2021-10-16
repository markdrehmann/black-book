class Contact < ApplicationRecord
  belongs_to :user
  has_many :notes
  validates :first_name, presence: true
end
