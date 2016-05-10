require 'rails_helper'

RSpec.feature 'user creates an Idea', type: :feature do
  # include WaitForAjax

  it 'saves new idea to database on click', js: true do
    visit '/'
    fill_in 'Title', with: "Pivot"
    fill_in 'Body', with: "Learn how to get paid to have really good ideas."
    click_on 'saveworthy'

    sleep 1

    expect(Idea.count).to eq(1)
  end
end
