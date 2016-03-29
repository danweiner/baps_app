class AddAttachmentPhotoToOwners < ActiveRecord::Migration
  def self.up
    change_table :owners do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :owners, :photo
  end
end
