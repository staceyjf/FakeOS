import { createElement } from "./utils.js";
import calculateTimeDate from "../logic/fetchTime.js";

//passed my dom elements from scripts.js / using thing function to initialise the clock
export function updateClockEl() {
  const clockDate = document.querySelector("#clockDate");
  const clockTime = document.querySelector("#clockTime");
  const clockContainer = document.querySelector("#clockContainer");

  setInterval(() => {
    const timeDateObj = calculateTimeDate();
    const date = timeDateObj.formattedUserDate;
    const time = timeDateObj.userTime;

    // update
    clockTime
      ? (clockTime.innerText = time)
      : createElement({
          elType: "div",
          text: time,
          parent: clockContainer,
          id: "clockTime",
          className: "clock__display",
        });

    clockDate
      ? (clockDate.innerText = date)
      : createElement({
          elType: "div",
          text: date,
          parent: clockContainer,
          id: "clockDate",
          className: "clock__display",
        });
  }, 1000);
}
