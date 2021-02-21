class AddLocationToGeomems < ActiveRecord::Migration[6.0]
  def change
    add_column :geomems, :location, :string
  end
end
