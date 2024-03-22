let date = new Date(); // current date and time
// output: Wed Sep 15 2022 17:26:37 GMT-0700 (Pacific Daylight Time)
let year = date.getFullYear(); // get year
let month = date.getMonth(); // get month

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

export default function fetchDays() {
  // calculate the first day of the month
  let firstDay = new Date(year, month, 1).getDay();

  // laste date of the month
  let lastdate = new Date(year, month + 1, 0).getDate();

  // calculate the last day
  let lastDay = new Date(year, month, lastdate).getDay();

  // calculate the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  // dynmically generate days
  let generatedDates = "";

  let i = firstDay;

  // add previous months days to generatedDays
  while (i > 0) {
    generatedDates += `<li class="inactive">${monthlastdate - i + 1}</li>`;
    i--;
  }

  // add the current month's days
  for (let i = 1; i <= lastdate; i++) {
    // Check if the current date is today
    // check if our loop variables match our globally defined variables (all conditions need to match)
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active" // add class of active if its today
        : ""; // otherwise no class is added

    generatedDates += `<li class="${isToday}">${i}</li>`;
  }

  let j = lastDay;
  // add a couple of extra days from the next month
  // should be 5 or less pending where weeks sit over to the next month
  while (j < 6) {
    generatedDates += `<li class="inactive">${j - lastDay + 1}</li>`;
    j++;
  }

  return {
    generatedDates,
    months,
    month,
    year,
  };
}
