class Admin::OwnersController < Admin::ApplicationController

  def destroy
    @owner = Owner.find(params[:id])
    @owner.destroy

    flash[:notice] = "Profile has been deleted"
    redirect_to owners_path
  end

  private

    def owner_params
      params.require(:owner).permit(:name, :city, :country, :description)
    end

end
