class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :idea
      t.string :quality

      t.timestamps null: false
    end
  end
end
