console.log("hi script is working");
import calculateTimeDate from "./logic/fetchTime.js";
import { updateClockEl } from "./DOM/clock.js";
import handleJokeSubmit from "./DOM/chuck.js";
import handleNotesSubmission from "./DOM/notes.js";
import { handleCalendar, populateCalendar } from "./DOM/calendar.js";
import closeModal from "./DOM/modalHandlerClose.js";
import openModal from "./DOM/modalHandlerOpen.js";

// NODES
// APPs
// creates a NODE list which is a snapshot in time (don't need to dynamically update so fine to use)
const allIcons = document.querySelectorAll(".icon");
const modalCloseBtns = document.querySelectorAll(".modal--close");
const jokeParagraph = document.getElementById("chuckText");

// clock

function setupEventListeners() {
  openModal({
    icons: allIcons,
    jokeParagraph,
  });
  closeModal({
    elements: modalCloseBtns,
  });
  handleNotesSubmission();
  handleJokeSubmit(jokeParagraph);
  handleCalendar();
}

function initialize() {
  updateClockEl();
  setupEventListeners();
}

initialize();
