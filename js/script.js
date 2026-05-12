// ======================================================
// ================= BUSINESS LOGIC =====================
// ======================================================



// =====================
// PLACE CONSTRUCTOR
// =====================

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// PLACE PROTOTYPE METHODS

Place.prototype.getSummary = function () {
  return this.location;
};

Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>

    <p><strong>Landmarks:</strong>
    ${this.landmarks}</p>

    <p><strong>Time of Year:</strong>
    ${this.season}</p>

    <p><strong>Notes:</strong>
    ${this.notes}</p>
  `;
};



// =====================
// CONTACT CONSTRUCTOR
// =====================

function Contact(firstName, lastName, phoneNumber, address) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

// CONTACT PROTOTYPE METHODS

Contact.prototype.getFullName = function () {

  return `${this.firstName} ${this.lastName}`;
};

Contact.prototype.getDetails = function () {

  return `
    <h3>${this.getFullName()}</h3>

    <p><strong>Phone:</strong>
    ${this.phoneNumber}</p>

    <p><strong>Address:</strong>
    ${this.address}</p>
  `;
};



// ======================================================
// ================= APPLICATION STATE ==================
// ======================================================

let places = [];
let contacts = [];

let editingPlaceIndex = null;
let editingContactIndex = null;



// ======================================================
// ================= APPLICATION LOGIC ==================
// ======================================================



// =====================
// PLACE LOGIC
// =====================

function addPlace(place) {
  places.push(place);
}

function updatePlace(index, updatedPlace) {
  places[index] = updatedPlace;
}

function removePlace(index) {
  places.splice(index, 1);
}



// =====================
// CONTACT LOGIC
// =====================

function addContact(contact) {
  contacts.push(contact);
}

function updateContact(index, updatedContact) {
  contacts[index] = updatedContact;
}

function removeContact(index) {
  contacts.splice(index, 1);
}



// ======================================================
// ===================== UI LOGIC =======================
// ======================================================



// =====================
// DISPLAY PLACES
// =====================

function displayPlaces() {

  const placesList =
    document.getElementById("places");

  placesList.innerHTML = "";

  places.forEach((place, index) => {

    const li = document.createElement("li");

    li.textContent = place.getSummary();

    li.addEventListener("click", function () {

      showPlaceDetails(index);

    });

    placesList.appendChild(li);

  });

}



// =====================
// SHOW PLACE DETAILS
// =====================

function showPlaceDetails(index) {

  const detailsDiv =
    document.getElementById("placeDetails");

  detailsDiv.innerHTML = `
    ${places[index].getDetails()}

    <div class="button-group">

      <button id="editPlaceBtn">
        Edit
      </button>

      <button id="removePlaceBtn">
        Remove
      </button>

    </div>
  `;


  // REMOVE PLACE

  document.getElementById("removePlaceBtn")
    .addEventListener("click", function () {

      removePlace(index);

      displayPlaces();

      detailsDiv.innerHTML =
        "<p>Place removed successfully.</p>";

    });


  // EDIT PLACE

  document.getElementById("editPlaceBtn")
    .addEventListener("click", function () {

      editingPlaceIndex = index;

      document.getElementById("location").value =
        places[index].location;

      document.getElementById("landmarks").value =
        places[index].landmarks;

      document.getElementById("season").value =
        places[index].season;

      document.getElementById("notes").value =
        places[index].notes;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

}



// =====================
// DISPLAY CONTACTS
// =====================

function displayContacts() {

  const contactList =
    document.getElementById("contactList");

  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {

    const li = document.createElement("li");

    li.textContent = contact.getFullName();

    li.addEventListener("click", function () {

      showContactDetails(index);

    });

    contactList.appendChild(li);

  });

}



// =====================
// SHOW CONTACT DETAILS
// =====================

function showContactDetails(index) {

  const detailsDiv =
    document.getElementById("contactDetails");

  detailsDiv.innerHTML = `
    ${contacts[index].getDetails()}

    <div class="button-group">

      <button id="editContactBtn">
        Edit
      </button>

      <button id="removeContactBtn">
        Remove
      </button>

    </div>
  `;


  // REMOVE CONTACT

  document.getElementById("removeContactBtn")
    .addEventListener("click", function () {

      removeContact(index);

      displayContacts();

      detailsDiv.innerHTML =
        "<p>Contact removed successfully.</p>";

    });


  // EDIT CONTACT

  document.getElementById("editContactBtn")
    .addEventListener("click", function () {

      editingContactIndex = index;

      document.getElementById("firstName").value =
        contacts[index].firstName;

      document.getElementById("lastName").value =
        contacts[index].lastName;

      document.getElementById("phoneNumber").value =
        contacts[index].phoneNumber;

      document.getElementById("address").value =
        contacts[index].address;

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

}



// ======================================================
// ===================== FORM LOGIC =====================
// ======================================================

document.addEventListener("DOMContentLoaded", function () {




  // ===================================================
  // PLACE FORM
  // ===================================================

  const placeForm =
    document.getElementById("placeForm");


  placeForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const location =
      document.getElementById("location")
        .value
        .trim();

    const landmarks =
      document.getElementById("landmarks")
        .value
        .trim();

    const season =
      document.getElementById("season")
        .value
        .trim();

    const notes =
      document.getElementById("notes")
        .value
        .trim();


    // VALIDATION

    if (!location || !landmarks || !season) {

      alert("Please fill in all place fields.");

      return;
    }


    const place = new Place(
      location,
      landmarks,
      season,
      notes
    );


    // EDIT MODE

    if (editingPlaceIndex !== null) {

      updatePlace(editingPlaceIndex, place);

      editingPlaceIndex = null;

    } else {

      // ADD MODE

      addPlace(place);
    }


    displayPlaces();

    placeForm.reset();

  });





  // ===================================================
  // CONTACT FORM
  // ===================================================

  const contactForm =
    document.getElementById("contactForm");


  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstName =
      document.getElementById("firstName")
        .value
        .trim();

    const lastName =
      document.getElementById("lastName")
        .value
        .trim();

    const phoneNumber =
      document.getElementById("phoneNumber")
        .value
        .trim();

    const address =
      document.getElementById("address")
        .value
        .trim();


    // VALIDATION

    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address
    ) {

      alert("Please fill in all contact fields.");

      return;
    }


    const contact = new Contact(
      firstName,
      lastName,
      phoneNumber,
      address
    );


    // EDIT MODE

    if (editingContactIndex !== null) {

      updateContact(editingContactIndex, contact);

      editingContactIndex = null;

    } else {

      // ADD MODE

      addContact(contact);
    }


    displayContacts();

    contactForm.reset();

  });

});