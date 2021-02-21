class Geomem < ApplicationRecord
    validates :title, presence: true
    validates :location, presence: true
end
