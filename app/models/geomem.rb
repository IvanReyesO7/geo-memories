class Geomem < ApplicationRecord
    validates :title, presence: true
    validates :location, presence: true
    validates :photo, presence: true

    has_one_attached :photo
end
