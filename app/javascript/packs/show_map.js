const coord = document.getElementById("coord");
console.log(coord.innerText.split(","));


const displayMap = (coord) =>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnJleWVzbzciLCJhIjoiY2trcnVyb2Z5MDB3ZTJvbXA4MTZ1aGt4YiJ9.7lE4xg5oMtbhAj9Q-5kn9g';
    var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [Number.parseFloat(coord[0]), Number.parseFloat(coord[1])], // starting position [lng, lat]
    zoom: 15 // starting zoom
    });
    new mapboxgl.Marker()
        .setLngLat([Number.parseFloat(coord[0]), Number.parseFloat(coord[1])])
        .addTo(map);
  };

  displayMap(coord.innerText.split(","));