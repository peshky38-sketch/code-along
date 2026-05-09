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