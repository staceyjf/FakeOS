export default function fetchDays(year, month) {
  let date = new Date(); // current date and time
  // output: Wed Sep 15 2022 17:26:37 GMT-0700 (Pacific Daylight Time)

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // calculate the different elements of the month
  let firstDay = new Date(year, month, 1).getDay();
  let lastdate = new Date(year, month + 1, 0).getDate();
  let lastDay = new Date(year, month, lastdate).getDay();
  let monthlastdate = new Date(year, month, 0).getDate();

  let generatedDates = "";

  // add previous months days to generatedDays
  let i = firstDay;
  while (i > 0) {
    generatedDates += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    i--;
  }

  // add this month's days
  // add the current month's days
  for (let i = 1; i <= lastdate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active" // add class of active if its today
        : ""; // otherwise no class is added

    generatedDates += `<li class="${isToday}">${i}</li>`;
  }

  // add a couple of extra days from the next month
  // should be 5 or less pending where weeks sit over to the next month
  let j = lastDay;
  while (j < 6) {
    generatedDates += `<li class="inactive">${j - lastDay + 1}</li>`;
    j++;
  }

  console.log(`this is ${typeof generatedDates} in generatedDates`);
  console.log(`this is ${month} in month}`);
  console.log(`this is ${months} in months}`);
  console.log(`this is ${year} in year}`);

  // return the data needed for current date header and calendar-dates
  return {
    generatedDates, // day strings
    month,
    months,
    year,
  };
}
