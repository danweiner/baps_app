class PetImage < ActiveRecord::Base
  belongs_to :pet
  
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
