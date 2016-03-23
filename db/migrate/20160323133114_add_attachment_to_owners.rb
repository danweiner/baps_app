class AddAttachmentToOwners < ActiveRecord::Migration
  def change
    add_column :owners, :attachment, :string
  end
end
