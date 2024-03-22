console.log("hi script is working");
import calculateTimeDate from "./logic/fetchTime.js";
import { updateClockEl } from "./DOM/clock.js";
import handleJokeSubmit from "./DOM/chuck.js";
import fetchDays from "./logic/fetchDays.js";
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
const clockDate = document.querySelector("#clockDate");
const clockTime = document.querySelector("#clockTime");
const clockContainer = document.querySelector("#clockContainer");

function setupEventListeners() {
  openModal({
    icons: allIcons,
    jokeParagraph,
  });
  closeModal({
    modals: modalCloseBtns,
  });
  handleJokeSubmit(jokeParagraph);
  handleCalendar();
}

function initialize() {
  updateClockEl(calculateTimeDate, clockDate, clockTime, clockContainer);
  // const data = fetchDays();
  // console.log(data);
  // populateCalendar(data.generatedDates, data.month, data.months, data.year);
  setupEventListeners();
}

initialize();
