export default function calculateTimeDate() {
  let currentTime = new Date();
  // get local time and date for the user
  let currentLocalTime = currentTime.toLocaleString();
  return currentLocalTime;
}
