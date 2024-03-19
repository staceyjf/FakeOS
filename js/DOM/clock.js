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
    const formattedTimeStr = null;

    // console.log("time in clock.js: ", timeString);
    console.log("formattedDateStr in clock.js: ", formattedDateStr);
  }, 1000);
}
