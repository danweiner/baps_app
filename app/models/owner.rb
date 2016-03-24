class Owner < ActiveRecord::Base
  has_many :pets, dependent: :delete_all

  validates :name, presence: true

  geocoded_by :city
  after_validation :geocode

  mount_uploader :attachment, AttachmentUploader
end
