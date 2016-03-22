class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.integer :weight
      t.string :breed
      t.text :description
      t.references :owner, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
