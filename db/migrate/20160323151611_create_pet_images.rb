class CreatePetImages < ActiveRecord::Migration
  def change
    create_table :pet_images do |t|
      t.text :caption
      t.references :pet, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
