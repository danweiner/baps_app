class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def about 
  end

  def contact
  end

  def map
    @owners = Owner.all

    @hash = Gmaps4rails.build_markers(@owners) do |owner, marker|
      marker.lat owner.latitude
      marker.lng owner.longitude
      marker.infowindow owner.name
    end


  end
end
