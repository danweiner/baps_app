class AddPetIdToComments < ActiveRecord::Migration
  def change
    add_reference :comments, :pet, index: true, foreign_key: true
  end
end
