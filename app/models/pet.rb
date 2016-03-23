class Pet < ActiveRecord::Base
  belongs_to :owner
  has_many :pet_images, :dependent => :destroy

  accepts_nested_attributes_for :pet_images, :reject_if => lambda { |t| t['pet_image'].nil? }

  validates :name, presence: true
  
end
