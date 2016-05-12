class Api::V1::IdeasController < ApplicationController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def create
    respond_with Idea.create(idea_params), location: nil
  end

  def destroy
    respond_with Idea.destroy(params[:id]), location: nil
  end

  def update
    if params[:quality]
      respond_with Idea.update(params[:id], quality: params[:quality]), location: nil
    else
      respond_with Idea.update(params[:id], idea_params), location: nil
    end
  end

  private

    def idea_params
      params.require(:idea).permit(:title, :body, :quality)
    end

end
