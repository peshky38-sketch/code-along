// BUSINESS LOGIC

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}
Place.prototype.fullDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Time of Year:</strong> ${this.season}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};
// APPLICATION LOGIC

let places = [];

function displayPlaces() {
  const placesList = document.getElementById("places");
  placesList.innerHTML = "";

  places.forEach(function(place, index) {
    const li = document.createElement("li");
    li.innerText = place.location;

    li.addEventListener("click", function() {
      showDetails(index);
    });

    placesList.appendChild(li);
  });
}

function showDetails(index) {
  const detailsDiv = document.getElementById("placeDetails");
  detailsDiv.innerHTML = places[index].fullDetails();
}

// UI LOGIC

document.getElementById("placeForm")