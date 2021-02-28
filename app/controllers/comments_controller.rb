class CommentsController < ApplicationController
  def create
    @geomem = Geomem.find(params[:geomem_id])
    @comment = Comment.new(comment_params)
    @comment.geomem = @geomem
    if @comment.save
      redirect_to geomem_path(@geomem)
    else
      redirect_to geomem_path(@geomem)
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:username, :content)
  end
end
