class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true

  enum quality: %w(potential tangible executable)

  def truncate_body
    body.truncate(100, seperator: ' ')
  end

end
