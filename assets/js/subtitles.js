// /assets/js/subtitles.js
document.addEventListener("DOMContentLoaded", function () {
  const subtitles = [
    "Thoughts in the quiet",
    "Walking the narrow way",
    "Poems, prayers, and ponderings",
    "Faith, land, and life on the Hill",
    "Where ink meets eternity"
  ];
  const random = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  if (subtitleElement) {
    subtitleElement.textContent = subtitles[random];
  }
});
