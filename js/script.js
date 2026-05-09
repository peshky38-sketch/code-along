// =====================
// BUSINESS LOGIC
// =====================

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// REQUIRED PROTOTYPE METHOD (summary)
Place.prototype.getSummary = function () {
  return this.location;
};

// REQUIRED PROTOTYPE METHOD (full details)
Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Time of Year:</strong> ${this.season}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};


// =====================
// APPLICATION STATE
// =====================

let places = [];


// =====================
// APPLICATION LOGIC
// =====================

function addPlace(place) {
  places.push(place);
}

function getPlaces() {
  return places;
}


// =====================
// UI LOGIC (DISPLAY)
// =====================

function displayPlaces() {
  const placesList = document.getElementById("places");
  placesList.innerHTML = "";

  places.forEach((place, index) => {
    const li = document.createElement("li");

    li.textContent = place.getSummary();

    li.addEventListener("click", function () {
      showDetails(index);
    });

    placesList.appendChild(li);
  });
}


// =====================
// SHOW DETAILS
// =====================

function showDetails(index) {
  const detailsDiv = document.getElementById("placeDetails");
  detailsDiv.innerHTML = places[index].getDetails();
}


// =====================
// INIT (FORM HANDLER)
// =====================

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("placeForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const location = document.getElementById("location").value.trim();
    const landmarks = document.getElementById("landmarks").value.trim();
    const season = document.getElementById("season").value.trim();
    const notes = document.getElementById("notes").value.trim();

    // validation (important for marks)
    if (!location || !landmarks || !season) {
      alert("Please fill in all required fields");
      return;
    }

    const newPlace = new Place(location, landmarks, season, notes);

    addPlace(newPlace);

    displayPlaces();

    form.reset();
  });

});