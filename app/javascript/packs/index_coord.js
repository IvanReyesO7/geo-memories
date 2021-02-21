const polaroids = document.querySelectorAll(".polaroid");

console.log(polaroids);

const DisplayCoord = ((event) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiaXZhbnJleWVzbzciLCJhIjoiY2trcnVyb2Z5MDB3ZTJvbXA4MTZ1aGt4YiJ9.7lE4xg5oMtbhAj9Q-5kn9g';
  const jsCoord = event.currentTarget.querySelector("#js-coord").innerText.split(",")
  new mapboxgl.Marker()
    .setLngLat([Number.parseFloat(jsCoord[0]), Number.parseFloat(jsCoord[1])])
    .addTo(map);  
});

polaroids.forEach((polaroid) => {
  polaroid.addEventListener("mouseover", DisplayCoord);
});