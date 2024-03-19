console.log("hi script is working");
// LOGIC
import calculateTimeDate from "./logic/time.js";
import { updateClockEl } from "./DOM/clock.js";

// NODES

// clock
// pass my time function to updateClockEl
updateClockEl(calculateTimeDate);
