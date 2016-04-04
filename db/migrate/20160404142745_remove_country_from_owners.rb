class RemoveCountryFromOwners < ActiveRecord::Migration
  def change
    remove_column :owners, :country, :string
  end
end
