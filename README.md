#  Places I've Been & Address Book

## Author
Rachel Angela

---
#  Project Description

This is a JavaScript web application that combines a Places I've Been tracker and an Address Book system.

It allows users to:
- Add, view, edit, and delete places they have visited
- Store place details such as location, landmarks, season, and notes
- Add, view, edit, and delete contacts in an address book
- Use object-oriented programming with constructors and prototypes
- Demonstrate test-driven development (TDD)

---
#  Live Site

GitHub Pages Link:
https://peshky38-sketch.github.io/code-along/

---

# Technologies Used

- HTML
- CSS
- JavaScript

---

#  Setup Instructions

1. Clone the repository:
git clone https://github.com/peshky38-sketch/code-along

2. Open the project folder

3. Open index.html in your browser

---

# Business Logic, Constructors, Prototypes & Tests

The application uses JavaScript constructors and prototypes to manage data.

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.getSummary = function () {
  return this.location;
};

Place.prototype.getDetails = function () {
  return `
    <h3>${this.location}</h3>
    <p><strong>Landmarks:</strong> ${this.landmarks}</p>
    <p><strong>Time of Year:</strong> ${this.season}</p>
    <p><strong>Notes:</strong> ${this.notes}</p>
  `;
};

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.address = address;
}

Contact.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Contact.prototype.getDetails = function () {
  return `
    <h3>${this.getFullName()}</h3>
    <p><strong>Phone:</strong> ${this.phoneNumber}</p>
    <p><strong>Address:</strong> ${this.address}</p>
  `;
};

---

#  TEST-DRIVEN DEVELOPMENT (TDD)

Describe: Place()

Test: It should create a place object with 4 properties

let place = new Place("Nairobi", "KICC", "December", "Amazing trip");

Expected Output:
{
  location: "Nairobi",
  landmarks: "KICC",
  season: "December",
  notes: "Amazing trip"
}

---

Describe: Place.prototype.getSummary()

Test: It should return the location name

place.getSummary();

Expected Output:
"Nairobi"

---

Describe: Place.prototype.getDetails()

Test: It should return formatted place details

place.getDetails();

Expected Output:
HTML formatted string with all place details

---

Describe: addPlace()

Test: It should add a place object to array

addPlace(place);

Expected Output:
places array increases

---

Describe: removePlace()

Test: It should remove a place from array

removePlace(0);

Expected Output:
place removed successfully

---

Describe: Contact()

Test: It should create a contact object

let contact = new Contact("Rachel", "Angela", "0712345678", "Nairobi");

Expected Output:
Contact object created with properties

---

Describe: Contact.prototype.getFullName()

Test: It should return full name

contact.getFullName();

Expected Output:
"Rachel Angela"

---

Describe: Contact.prototype.getDetails()

Test: It should return formatted contact details

Expected Output:
HTML formatted contact details

---

Describe: addContact()

Test: It should add contact to array

addContact(contact);

Expected Output:
contacts array increases

---

Describe: removeContact()

Test: It should remove contact from array

removeContact(0);

Expected Output:
Contact removed successfully

---

#  Features

- Add places
- View place details
- Edit places
- Remove places
- Add contacts
- View contact details
- Edit contacts
- Remove contacts
- Dynamic UI updates
- Form validation

---

#  Known Bugs

No known bugs

---

#  License

MIT License

Copyright (c) 2026 Rachel Angela

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction.

This project is licensed under the MIT License. 