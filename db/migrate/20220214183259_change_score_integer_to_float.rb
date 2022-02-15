class ChangeScoreIntegerToFloat < ActiveRecord::Migration[6.1]
  def change
    change_column :restaurants, :score, :float
  end
end
