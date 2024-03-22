import calculateDates from "../logic/fetchDays.js";

const navIcons = document.querySelectorAll(".calendar-navigation i");

// NODES
export default async function handleCalendar() {
  navIcons.forEach((icon) => {
    icon.addEventListener("click", async () => {
      // Check if the icon is "calendar-prev' or "calendar-next"
      month = icon.id === "calendar-prev" ? month - 1 : month + 1;

      // Check if the month is out of range
      if (month < 0 || month > 11) {
        // Set the date to the first day of the month with the new year
        date = new Date(year, month, new Date().getDate());

        // Set the year to the new year
        year = date.getFullYear();

        // Set the month to the new month
        month = date.getMonth();
      } else {
        // Set the date to the current date
        date = new Date();
      }

      // Call fetchDays and get the returned object
      let data = await calculateDates();

      // Update the header with the current month
      document.querySelector(".calendar__curr-date").innerText = `${
        data.months[data.month]
      } ${data.year}`;

      // update the HTML of the dates element
      // with the generated calendar
      document.querySelector(".calendar__dates").innerHTML =
        data.generatedDates;
    });
  });
}
