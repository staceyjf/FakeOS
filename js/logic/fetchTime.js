export default function calculateTimeDate() {
  let currentTime = new Date();
  // get local time and date for the user
  let currentLocalTime = currentTime.toLocaleString();
  console.log("this is the current time " + currentLocalTime);
  return currentLocalTime;
}
