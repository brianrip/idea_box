require 'rails_helper'

RSpec.feature 'change idea quality', type: :feature do
  it 'increments idea from potential to tangible', js: true do
    visit '/'

    fill_in 'Title', with: "Idea"
    fill_in 'Body', with: "Lets make this idea better"

    click_on 'saveworthy'

    expect(page).to have_content "Idea"
    expect(page).to have_content "Lets make this idea better"
    expect(page).to have_content "potential"

    within(:css, ".idea[data-id='1']") do
      find('.quality').click
    end

    expect(page).to     have_content "potential"
    expect(page).to_not have_content "tangible"

  end
end
