console.log("hi script is working");

// LOGIC
import calculateTimeDate from "./logic/time.js";
import { updateClockEl } from "./DOM/clock.js";

// NODES
// icons
const allIcons = document.querySelectorAll(".icon");
const printer = document.querySelector("#printerBtn");

// clock
const clockDate = document.querySelector("#clockDate");
const clockTime = document.querySelector("#clockTime");
const clockContainer = document.querySelector("#clockContainer");

// initialise clock
// pass my time function to updateClockEl
updateClockEl(calculateTimeDate, clockDate, clockTime, clockContainer);
