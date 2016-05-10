class ChangeColumnIdeas < ActiveRecord::Migration
  def change
    rename_column :ideas, :idea, :body
  end
end
