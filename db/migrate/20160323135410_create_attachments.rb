class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :file
      t.references :pet, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
