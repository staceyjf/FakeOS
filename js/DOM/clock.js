import { createElement } from "./utils.js";

export function updateClockEl(
  calculateTimeDate,
  clockDate,
  clockTime,
  clockContainer
) {
  // refreshes every 1 sec to give the latest time
  setInterval(() => {
    const timeString = calculateTimeDate();

    // modify 19/03/2024 to 19.03.24
    const formattedDateStr = (
      timeString.slice(0, 5) +
      "." +
      timeString.slice(8, 10)
    ).replace(/\//g, ".");

    // slice to this 21:44:26
    const formattedTimeStr = timeString.slice(12);

    // update
    clockTime
      ? (clockTime.innerText = formattedTimeStr)
      : createElement({
          elType: "div",
          text: formattedTimeStr,
          parent: clockContainer,
          id: "clockTime",
          className: "clock__display",
        });

    clockDate
      ? (clockDate.innerText = formattedDateStr)
      : createElement({
          elType: "div",
          text: formattedDateStr,
          parent: clockContainer,
          id: "clockDate",
          className: "clock__display",
        });
  }, 1000);
}
