class GeomemsController < ApplicationController
  def index
    @geomems = Geomem.all
    @markers = []
    @geomems.each do |memory|
      @markers << {
        lat: memory.coordinates.split(",").map(&:to_f)[1],
        lng: memory.coordinates.split(",").map(&:to_f)[0],
        image_url: memory.photo.key,
        id: memory.id
      }
    end
  end

  def show
    @geomem = Geomem.find(params[:id])
    @markers = [{
      lat: @geomem.coordinates.split(",").map(&:to_f)[1],
      lng: @geomem.coordinates.split(",").map(&:to_f)[0],
      image_url: @geomem.photo.key,
      id: @geomem.id
    }]
  end

  def new
    @geomem = Geomem.new
  end

  def create
    @geomem = Geomem.create(geomem_params)
    if @geomem.save
      redirect_to geomems_path
    else
      render :new
    end
  end
  
  def edit
    @geomem = Geomem.find(params[:id])
  end

  def update
    @geomem = Geomem.find(params[:id])
    @geomem.update(geomem_params)
    if @geomem.save
      redirect_to geomems_path
    else
      render :edit
    end
  end

  def destroy
    @geomem = Geomem.find(params[:id])
    @geomem.destroy
    redirect_to geomems_path
  end

  private

  def geomem_params
    params.require(:geomem).permit(:title, :description, :photo, :location, :coordinates)
  end

end
