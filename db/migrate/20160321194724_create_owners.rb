class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :name
      t.string :city
      t.string :country
      t.text :description

      t.timestamps null: false
    end
  end
end
