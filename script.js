"use strict";
const input = document.querySelector(".date_input");
const icon = document.querySelector(".calender-icon");

flatpickr(input, {
  dateFormat: "d/m/Y",
});

// When icon is clicked, focus the input to open calendar
icon.addEventListener("click", () => {
  input.focus();
});
