class PetsController < ApplicationController
  before_action :set_owner
  before_action :set_pet, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  def index 
  end

  def show
  end
  
  def new
    @pet = @owner.pets.build
  end

  def create
    @pet = @owner.pets.build(pet_params)

    if @pet.save
      flash[:notice] = "Pet info has been saved"
      redirect_to [@owner, @pet]
    else
      flash.now[:alert] = "Pet info has not been created"
      render :new
    end
  end

  def edit
  end

  def update
    if @pet.update(pet_params)
      flash[:notice] = "Pet info has been updated"
      redirect_to [@owner, @pet]
    else
      flash.now[:alert] = "Pet info has not been updated"
      render :edit
    end
  end

  def destroy
    @pet.destroy
    flash[:notice] = "Pet info has been deleted"

    redirect_to @owner
  end

  private

    def set_owner
      @owner = Owner.find(params[:owner_id])
    end

    def set_pet
      @pet = @owner.pets.find(params[:id])
    end

    def pet_params
      params.require(:pet).permit(:name, :age, :weight, :breed, :description, :attachment)
    end

end
