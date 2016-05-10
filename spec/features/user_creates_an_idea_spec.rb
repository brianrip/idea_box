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
    create(:idea, title: "Canyons", body: "go canyoneering in Bryce, UT")

    expect(page).to have_content("Canyons")
    expect(page).to have_content("go canyoneering in Bryce, UT")    
  end
end
