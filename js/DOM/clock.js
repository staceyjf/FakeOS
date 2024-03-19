export function updateClockEl(calculateTimeDate) {
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

    // console.log("time in clock.js: ", timeString);
    // console.log("formattedTimeStr in clock.js: ", formattedTimeStr);

    //update the relevant DOM els
    const dateParent = document.querySelector("#clockDate");
    const timeParent = document.querySelector("#clockTime");

    if (timeParent) {
      timeParent.innerText = formattedTimeStr;
    } else {
      console.log("Element with id 'clockTime' not found");
    }

    if (dateParent) {
      dateParent.innerText = formattedDateStr;
    } else {
      console.log("Element with id 'clockTime' not found");
    }
  }, 1000);
}
