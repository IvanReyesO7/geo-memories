const polaroids = document.querySelectorAll(".polaroid");
console.log(polaroids);


mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnJleWVzbzciLCJhIjoiY2trcnVyb2Z5MDB3ZTJvbXA4MTZ1aGt4YiJ9.7lE4xg5oMtbhAj9Q-5kn9g';
  var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [139.77,35.68], // starting position [lng, lat]
    zoom: 11 // starting zoom
  });

const DisplayCoord = ((event) => {
  const jsCoord = event.currentTarget.querySelector("#js-coord").innerText.split(",")
  new mapboxgl.Marker()
    .setLngLat([Number.parseFloat(jsCoord[0]), Number.parseFloat(jsCoord[1])])
    .addTo(map);
});

polaroids.forEach((polaroid) => {
  polaroid.addEventListener("mouseover", DisplayCoord);
});


