function geoFindMe() {

    const mapLink = document.querySelector('#map-link');
    const location = document.querySelector('#geomem_location');
    const coordinates = document.querySelector('#geomem_coordinates');
    
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        location.value = `${data.address.city}, ${data.address.country}`;
      });
      coordinates.value = `${longitude},${latitude}`

    }
  
    function error() {
      location.value = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
        location.value = 'Geolocation is not supported by your browser';
    } else {
      location.value = 'Locating...';
      navigator.geolocation.getCurrentPosition(success, error);
    }

  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);

  