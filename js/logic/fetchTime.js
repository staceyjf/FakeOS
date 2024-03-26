export default function calculateTimeDate() {
  let currentTime = new Date();

  console.log(currentTime);

  const userTime = currentTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // console.log(userTime);

  const userDate = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  console.log(userDate);

  // replace '/' with '.' for macintosh format
  const formattedUserDate = userDate.replace(/\//g, ".");

  // console.log(formattedUserDate);

  return { formattedUserDate, userTime };
}
