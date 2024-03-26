export default function calculateTimeDate() {
  // refreshes every 1 sec to give the latest time

  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // to make it 6 digit format 00:00:00, pad with extra 0 if less than 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const userTime = `${hours}:${minutes}:${seconds}`;
  console.log(userTime); // Log the time

  let year = currentTime.getFullYear();
  let month = currentTime.getMonth() + 1; // Jan is 0 so need to +1 to reflect the calendar month
  let day = currentTime.getDate(); // to get the day as getDay returns a number eg 0 is Monday

  // to make it 6 digit format 00/00/00, pad with extra 0 if less than 10
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  const userDate = `${day}.${month}.${year}`;
  console.log(userDate); // Log the date

  return { userDate, userTime };
}
