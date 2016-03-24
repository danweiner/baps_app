class AddLatitudeAndLongititudeToOwner < ActiveRecord::Migration
  def change
    add_column :owners, :latitude, :float
    add_column :owners, :longitude, :float
  end
end
