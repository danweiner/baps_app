class Owner < ActiveRecord::Base
  has_many :pets, dependent: :delete_all
  has_many :comments

  validates :name, presence: true
  validates :address, presence: true

  geocoded_by :address
  after_validation :geocode

  has_attached_file :photo, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/

  mount_uploader :attachment, AttachmentUploader
end
