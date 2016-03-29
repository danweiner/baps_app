class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @owner = Owner.find(params[:comment][:owner_id])

    if @comment.save
      redirect_to owner_path(@owner), notice: "Comment was successfully added"
    else
      flash.now[:error] = "Error saving comment"
      render 'owners/show'
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:title, :content, :owner_id, :user_id)
    end

end
