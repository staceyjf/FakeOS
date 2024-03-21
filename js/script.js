console.log("hi script is working");

// LOGIC
import addJokes from "./logic/fetchJokes.js";
import calculateTimeDate from "./logic/fetchTime.js";
import { updateClockEl } from "./DOM/clock.js";
import { openModal, closeModal } from "./DOM/modalHandler.js";

// NODES
// icons
// creates a NODE list which is a snapshot in time (don't need to dynamically update so fine to use)
const allIcons = document.querySelectorAll(".icon");
const printer = document.querySelector("#printerBtn");
const other = document.querySelector("#otherBtn");

// clock
const clockDate = document.querySelector("#clockDate");
const clockTime = document.querySelector("#clockTime");
const clockContainer = document.querySelector("#clockContainer");

// initialise clock
// pass my time function to updateClockEl
updateClockEl(calculateTimeDate, clockDate, clockTime, clockContainer);

// trigger the modals to open when clicked
openModal(allIcons);

document.getElementById("chuckForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const categories = document.getElementById("chuckCategory");
  const category = categories.value;
  const jokeParagraph = document.getElementById("chuckText");

  console.log(category);
  addJokes(category, jokeParagraph);
});
