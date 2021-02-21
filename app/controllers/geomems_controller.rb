class GeomemsController < ApplicationController
  def index
    @geomems = Geomem.all
  end

  def show
    @geomem = Geomem.find(params[:id])
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
