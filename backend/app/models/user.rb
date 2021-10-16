class User < ApplicationRecord
  has_secure_password
  has_many :contacts
  has_many :notes, through: :contacts
  validates :username, presence: true
  validates :password, presence: true
end
