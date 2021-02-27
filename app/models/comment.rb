class Comment < ApplicationRecord
  belongs_to :Geomem

  validates :username, presence: true
  validates :content, presece: true
end
