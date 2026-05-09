# Places I've Been

## Created By
Rachel Angela

---

# Description

This application allows users to keep track of places they have visited.
Users can add destinations with details such as:

- Location
- Landmarks
- Time of year
- Notes

When the user clicks on a place name, all details about the place are displayed.

---

# Technologies Used

- HTML
- CSS
- JavaScript

---

# Setup Instructions

1. Clone the repository
2. Open the project folder
3. Open index.html in your browser

---

# Business Logic

## Constructor

```javascript
function Place(location, landmarks, season, notes)
```

Creates a new place object.

---

## Prototype Method

```javascript
Place.prototype.fullDetails
```

Returns all details about the place.

---

# Tests (TDD)

## Test 1

Describe: Place()

Test: It should create a place object with four properties.

Code:

```javascript
let place = new Place("Nairobi", "KICC", "December", "Amazing trip");
```

Expected Output:

```javascript
{
  location: "Nairobi",
  landmarks: "KICC",
  season: "December",
  notes: "Amazing trip"
}
```

---

## Test 2

Describe: Place.prototype.fullDetails()

Test: It should return formatted details about a place.

Code:

```javascript
place.fullDetails();
```

Expected Output:

```javascript
"Nairobi, KICC, December, Amazing trip"
```

---

## Test 3

Describe: Multiple Place Objects

Test: It should store multiple places in an array.

Code:

```javascript
places.push(place1);
places.push(place2);
```

Expected Output:

```javascript
2 place objects stored successfully
```

---

# Known Bugs

No known bugs.

---

# License

MIT License

---

# Copyright and License

Copyright (c) 2026 Rachel Angela

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files to deal in the Software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software.

This project is licsensed under the MIT License.