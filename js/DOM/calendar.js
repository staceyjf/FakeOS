import fetchDays from "../logic/fetchDays.js";

const calendarNavIcons = document.querySelectorAll(".calendar-navigation i");

// Initialize date, year, and month
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

// NODES
export function handleCalendar() {
  calendarNavIcons.forEach((icon) => {
    icon.addEventListener("click", async () => {
      // change months based on which "icon" is being clicked on eg forward or back
      month = icon.id === "calendar-prev" ? month - 1 : month + 1;

      // if the user goes earlier than Jan or later than Dec, create another date object with an updated starting point
      // 0 is Jan and 11 is Dec
      if (month < 0 || month > 11) {
        date = new Date(year, month, new Date().getDate());
        year = date.getFullYear(); // set to the revised year
        month = date.getMonth(); // set to the revised year
      }

      // Call fetchDays() after updating the month and year
      const data = await fetchDays(year, month);
      const generatedDates = data.generatedDates;
      const months = data.months;

      populateCalendar(generatedDates, month, months, year);
    });
  });
}

export function populateCalendar(generatedDates, month, months, year) {
  // Update the header with the current month
  document.querySelector(
    "#calendarDateHeader"
  ).innerText = `${months[month]} ${year}`;

  // manipluate my ul placeholder  with generated dates
  document.querySelector("#generatedCalendar").innerHTML = generatedDates;
}
