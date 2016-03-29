class RemoveCityFromOwners < ActiveRecord::Migration
  def change
    remove_column :owners, :city, :string
  end
end
