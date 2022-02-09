class Review < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates :comment, length: { maximum: 30 }
end
