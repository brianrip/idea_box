require 'rails_helper'

RSpec.feature 'user creates an Idea', type: :feature do
  include WaitForAjax

  it 'saves new idea to database on click', js: true do
    visit '/'
    fill_in 'Title', with: "Idea"
    fill_in 'Body', with: "Learn how to get paid to have really good ideas."
    click_on 'saveworthy'

    sleep 1

    expect(Idea.count).to eq(1)
  end

  it 'displays new idea on page', js: true do
    visit '/'
    fill_in 'Title', with: "Canyons"
    fill_in 'Body', with: "go canyoneering in Bryce, UT"
    click_on 'saveworthy'

    sleep 1

    expect(page).to have_content("Canyons")
    expect(page).to have_content("go canyoneering in Bryce, UT")
  end
end
