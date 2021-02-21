const results = document.getElementById("location-results");
const search = document.getElementById("geomem_location");
const coordinates = document.getElementById("geomem_coordinates");



// populates autoresults
const SearchSomething = (event) => {
  if (search.value !== '') {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search.value}.json?access_token=pk.eyJ1IjoiaXZhbnJleWVzbzciLCJhIjoiY2trcnVyb2Z5MDB3ZTJvbXA4MTZ1aGt4YiJ9.7lE4xg5oMtbhAj9Q-5kn9g&cachebuster=1613832548398&autocomplete=true`)
      .then(response => response.json())
      .then((data) => {  
        results.innerHTML = "";
        const five = data.features
        five.forEach((place) => {
          results.insertAdjacentHTML("beforeend", `<div class="result-div"><a href="" onclick="return false; "class="list-group-item list-group-item-action">${place.place_name}</a><p class ="center" hidden>${place.center}</p></div>`);
        });
        const allChilds = document.getElementsByClassName("result-div");
        var arr = Array.prototype.slice.call( allChilds );
        arr.forEach((place) => {  place.addEventListener("click", AutoComplete = (event) =>{
          search.value = place.firstChild.innerHTML;
          results.innerHTML = "";
          coordinates.value = place.lastChild.innerHTML;
          });
        });
        
      });
  }else{
    results.innerHTML = ""    
  }
};


search.addEventListener("keyup", SearchSomething);
// every time the user imput a key change the result text