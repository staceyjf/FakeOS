import fetchDays from "../logic/fetchDays.js";

const calendarNavIcons = document.querySelectorAll(".calendar-navigation i");

// define the months for the calendar header
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

// NODES
export default async function handleCalendar() {
  calendarNavIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      // set the date
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();

      // change months based on which "icon" is being clicked on eg forward or back
      month = icon.id === "calendar-prev" ? month - 1 : month + 1;

      // if the user goes earlier than Jan or later than Dec, create another date object with an updated starting point
      // 0 is Jan and 11 is Dec
      if (month < 0 || month > 11) {
        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear(); // set to the revised year
        month = date.getMonth(); // set to the revised year
      }

      // Call fetchDays and get the returned object
      let data = fetchDays();
      // data = { generatedDates, month, year,}
      month = data.month;
      year = data.year;
      generatedDates = data.generatedDates;

      // Update the header with the current month
      document.querySelector(".calendar__curr-date").innerText = `${
        data.months[data.month]
      } ${data.year}`;

      // manipluate my ul placeholder  with generated dates
      document.querySelector(".calendar__dates").innerHTML =
        data.generatedDates;
    });
  });
}
