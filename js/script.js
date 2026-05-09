// =====================
// BUSINESS LOGIC
// =====================
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.getSummary = function () {
  return `${this.location} - ${this.season}`;
};

Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Season:</strong> ${this.season}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};

// =====================
// STATE
// =====================
let places = [];
let currentIndex = null;

// =====================
// STORAGE
// =====================
function saveToStorage() {
  localStorage.setItem("places", JSON.stringify(places));
}

function loadFromStorage() {
  const data = localStorage.getItem("places");

  if (data) {
    try {
      const parsed = JSON.parse(data);
      places = parsed.map(
        p => new Place(p.location, p.landmarks, p.season, p.notes)
      );
    } catch (e) {
      places = [];
    }
  }
}

// =====================
// DISPLAY LIST
// =====================
function displayPlaces(list = places) {
  const ul = document.getElementById("places");
  ul.innerHTML = "";

  list.forEach((place, index) => {
    const li = document.createElement("li");

    li.textContent = place.getSummary();

    li.addEventListener("click", () => {
      currentIndex = index;
      showDetails(index);
    });

    ul.appendChild(li);
  });
}

// =====================
// SHOW DETAILS
// =====================
function showDetails(index) {
  const box = document.getElementById("placeDetails");
  box.innerHTML = places[index].getDetails();

  // Add buttons dynamically (SAFE WAY)
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editPlace(index);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => deletePlace(index);

  box.appendChild(editBtn);
  box.appendChild(deleteBtn);
}

// =====================
// DELETE
// =====================
function deletePlace(index) {
  places.splice(index, 1);
  saveToStorage();
  displayPlaces();
  document.getElementById("placeDetails").innerHTML = "<p>Select a place</p>";
}

// =====================
// EDIT
// =====================
function editPlace(index) {
  const place = places[index];

  document.getElementById("location").value = place.location;
  document.getElementById("landmarks").value = place.landmarks;
  document.getElementById("season").value = place.season;
  document.getElementById("notes").value = place.notes;

  places.splice(index, 1);
  saveToStorage();
  displayPlaces();
}

// =====================
// SEARCH
// =====================
function filterPlaces() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = places.filter(p =>
    p.location.toLowerCase().includes(value)
  );

  displayPlaces(filtered);
}

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {

  loadFromStorage();
  displayPlaces();

  document.getElementById("searchInput")
    .addEventListener("input", filterPlaces);

  document.getElementById("placeForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const location = document.getElementById("location").value.trim();
    const landmarks = document.getElementById("landmarks").value.trim();
    const season = document.getElementById("season").value.trim();
    const notes = document.getElementById("notes").value.trim();

    if (!location || !landmarks || !season) {
      alert("Please fill all required fields");
      return;
    }

    const newPlace = new Place(location, landmarks, season, notes);

    places.push(newPlace);

    saveToStorage();
    displayPlaces();

    e.target.reset();
  });

});