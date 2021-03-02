function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const location = document.querySelector('#geomem_location');
    const coordinates = document.querySelector('#geomem_coordinates');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

  
      coordinates.value = `${longitude},${latitude}`
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      location.value = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
        location.value = 'Geolocation is not supported by your browser';
    } else {
      location.value = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

  