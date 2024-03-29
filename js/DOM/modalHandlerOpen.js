// logic
import fetchJokes from "../logic/fetchJokes.js";
import fetchDays from "../logic/fetchDays.js";
import { populateCalendar } from "../DOM/calendar.js";

// a new scope if fired for each click even
export default function openModal({ icons, jokeParagraph }) {
  icons.forEach((icon) => {
    // console.log(`icon.id: ${icon.id}`);

    icon.addEventListener("dblclick", async () => {
      let modalId = icon.dataset.modalId; // get the modal id from custom HTML attribute
      // console.log(`modalId: ${modalId}`); // log the modalId

      let modalEl = document.getElementById(modalId); // select the modal

      switch (icon.id) {
        case "notesBtn": // opens notes
          try {
            displayModal(modalEl);
          } catch (e) {
            console.error("Error with opening date:", e);
          }
          break;
        case "printerBtn--open":
          window.print(); // opens the window's print method
          break;
        case "chuckBtn--open": // open's Chuck's Jokes
          try {
            const joke = await fetchJokes(); // wait for fetchJokes to complete
            jokeParagraph.innerText = joke;
            displayModal(modalEl);
          } catch (e) {
            console.error("Error fetching joke:", e);
          }
          break;
        case "clockDateBtnOpen": // opens clock
          try {
            displayModal(modalEl);
          } catch (e) {
            console.error("Error with opening date:", e);
          }
          break;
        case "clockCalendarBtnOpen": // opens calendar
          try {
            console.log(`${icon.id} is opening ${modalEl.outerHTML}`);
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let data = await fetchDays(year, month);
            console.log(JSON.stringify(data.generatedDates));
            populateCalendar(
              data.generatedDates,
              data.month,
              data.months,
              data.year
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
  console.log(modalEl);
  modalEl.classList.add("show");
}
