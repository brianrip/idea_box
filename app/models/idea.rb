class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  enum role: %w( potential tangible executable )

end
