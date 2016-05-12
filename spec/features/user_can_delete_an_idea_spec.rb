require 'rails_helper'

RSpec.feature 'user deletes an idea', type: :feature do

  it 'clicks on x and removes idea', js: true do

    visit '/'

    fill_in 'Title', with: "Delete"
    fill_in 'Body', with: "Me"
 
    click_on "saveworthy"

    expect(page).to have_content "Delete"
    expect(page).to have_content "Me"
    expect(Idea.count).to eq 1

    within(:css, ".idea[data-id='1']") do
      find('.delete_idea').click
    end

    expect(page).to_not have_content "Delete"
    expect(page).to_not have_content "Me"
    expect(Idea.count).to eq 0
  end
end
