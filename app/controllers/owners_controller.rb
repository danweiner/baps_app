class OwnersController < ApplicationController

  def index

  end

  def show
    @owner = Owner.find(params[:id])
  end

  def new
    @owner = Owner.new
  end

  def create
    @owner = Owner.new(owner_params)

    if @owner.save
      flash[:notice] = "Profile has been saved"
      redirect_to @owner
    else
    end
  end

  private

    def owner_params
      params.require(:owner).permit(:name, :city, :country, :description)
    end

end