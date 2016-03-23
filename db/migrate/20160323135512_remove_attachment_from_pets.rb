class RemoveAttachmentFromPets < ActiveRecord::Migration
  def change
    remove_column :pets, :attachment, :string
  end
end
