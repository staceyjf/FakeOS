console.log("hi script is working");

// LOGIC
import fetchJokes from "./logic/fetchJokes.js";
import calculateTimeDate from "./logic/fetchTime.js";
import { updateClockEl } from "./DOM/clock.js";
import { openModal, closeModal } from "./DOM/modalHandler.js";

// NODES
// icons
// creates a NODE list which is a snapshot in time (don't need to dynamically update so fine to use)
const allIcons = document.querySelectorAll(".icon");
const modalCloseBtns = document.querySelectorAll(".modal--close");

const allModals = document.querySelectorAll(".modal");

const printer = document.querySelector("#printerBtn");
const other = document.querySelector("#otherBtn");
const categories = document.getElementById("chuckCategory");
const category = categories.value;
const jokeParagraph = document.getElementById("chuckText");

// clock
const clockDate = document.querySelector("#clockDate");
const clockTime = document.querySelector("#clockTime");
const clockContainer = document.querySelector("#clockContainer");

function initialize() {
  // initialise clock
  updateClockEl(calculateTimeDate, clockDate, clockTime, clockContainer);
}

// add an eventlistener all els with icon class
openModal({
  icons: allIcons,
  jokeParagraph: jokeParagraph,
  category: category,
});

// add an eventlistener all els with modal class
closeModal({
  modals: modalCloseBtns,
});

document.getElementById("chuckForm").addEventListener("submit", (event) => {
  event.preventDefault();
  fetchJokes(jokeParagraph, category);
});

initialize(); // start the app with the relevant actios
