class OwnersController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @owners = Owner.all
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
      flash.now[:alert] = "Profile has not been created"
      render :new
    end
  end

  def edit
    @owner = Owner.find(params[:id])
  end

  def update
    @owner = Owner.find(params[:id])
    
    if @owner.update(owner_params)
      flash[:notice] = "Profile has been updated"
      redirect_to @owner
    else
      flash.now[:alert] = "Profile has not been updated"
      render :edit
    end
  end



  private

    def owner_params
      params.require(:owner).permit(:name, :city, :country, :description, :attachment, :attachment_cache)
    end

end
