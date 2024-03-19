export function updateClockEl(calculateTimeDate) {
  setInterval(() => {
    const timeString = calculateTimeDate();
    console.log("time in clock.js", timeString);
  }, 1000);
}
