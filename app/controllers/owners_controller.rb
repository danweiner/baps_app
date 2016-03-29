class OwnersController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    @owners = Owner.all
    @hash = Gmaps4rails.build_markers(@owners) do |owner, marker|
      marker.lat owner.latitude
      marker.lng owner.longitude
    end
  end

  def show
    @owner = Owner.find(params[:id])
    @comment = Comment.new
    @comments = @owner.comments.order(created_at: :desc)
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

  def destroy
    @owner = Owner.find(params[:id])
    @owner.destroy
    flash[:notice] = "Owner info has been deleted"

    redirect_to owners_path
  end



  private

    def owner_params
      params.require(:owner).permit(:name, :address, :pets, :country, :description, :photo)
    end

end
