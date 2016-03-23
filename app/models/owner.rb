class Owner < ActiveRecord::Base
  has_many :pets, dependent: :delete_all

  validates :name, presence: true

  mount_uploader :attachment, AttachmentUploader
end
