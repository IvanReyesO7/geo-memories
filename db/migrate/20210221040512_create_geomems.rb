class CreateGeomems < ActiveRecord::Migration[6.0]
  def change
    create_table :geomems do |t|
      t.string :title
      t.text :description
      t.string :coordinates

      t.timestamps
    end
  end
end
