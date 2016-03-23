class AddAttachmentToPets < ActiveRecord::Migration
  def change
    add_column :pets, :attachment, :string
  end
end
