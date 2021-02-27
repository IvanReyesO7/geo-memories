class Comment < ApplicationRecord
  belongs_to :geomem

  validates :username, presence: true
  validates :content, presence: true
end
