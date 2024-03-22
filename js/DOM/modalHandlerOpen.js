// logic
import fetchJokes from "../logic/fetchJokes.js";
import fetchDays from "../logic/fetchDays.js";
import { populateCalendar } from "../DOM/calendar.js";

// a new scope if fired for each click even
export default function openModal({ icons, jokeParagraph }) {
  icons.forEach((icon) => {
    // console.log(`icon.id: ${icon.id}`);

    icon.addEventListener("click", async () => {
      let modalId = icon.dataset.modalId; // get the modal id from custom HTML attribute
      console.log(`modalId: ${modalId}`); // log the modalId

      let modalEl = document.getElementById(modalId); // select the modal

      switch (icon.id) {
        case "printerBtn--open":
          window.print(); // opens the window's print method
          break;
        case "chuckBtn--open":
          try {
            const joke = await fetchJokes(); // wait for fetchJokes to complete
            jokeParagraph.innerText = joke;
            displayModal(modalEl);
          } catch (e) {
            console.error("Error fetching joke:", e);
          }
          break;
        case "clockDateBtnOpen":
          try {
            displayModal(modalEl);
          } catch (e) {
            console.error("Error with opening date:", e);
          }
          break;
        case "clockCalendarBtnOpen":
          try {
            console.log(`${icon.id} is opening ${modalEl}`);
            const data = fetchDays();
            populateCalendar(
              data.month,
              data.months,
              data.year,
              data.generatedDates
            );
            displayModal(modalEl);
          } catch (e) {
            console.error("Error with creating calendar:", e);
          }
          break;
        default:
          alert("This icon is just for show");
      }
    });
  });
}

// open
function displayModal(modalEl) {
  modalEl.classList.add("show");
}
