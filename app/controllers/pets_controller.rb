class PetsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def index 
    @pets = Pet.all
  end

  def show
     @pet = Pet.find(params[:id])
  end
  
  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      flash[:notice] = "Pet info has been saved"
      redirect_to @pet
    else
      flash.now[:alert] = "Pet info has not been created"
      render :new
    end
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      flash[:notice] = "Pet info has been updated"
      redirect_to @pet
    else
      flash.now[:alert] = "Pet info has not been updated"
      render :edit
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    flash[:notice] = "Pet info has been deleted"

    redirect_to pets_path
  end

  private

    def set_owner
      @owner = Owner.find(params[:owner_id])
    end

    def set_pet
      @pet = @owner.pets.find(params[:id])
    end

    def pet_params
      params.require(:pet).permit(:name, :age, :weight, :breed, :description, :photo)
    end

end
