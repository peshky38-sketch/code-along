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
https://your-github-pages-link-here

---

# Technologies Used

- HTML
- CSS
- JavaScript

---

#  Setup Instructions

1. Clone the repository:
git clone https://github.com/your-username/your-repo-name.git

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