import fetchJokes from "../logic/fetchJokes.js";
// Modals

// a new scope if fired for each click even
export default function openModal({ icons, jokeParagraph }) {
  icons.forEach((icon) => {
    icon.addEventListener("click", async () => {
      const modalId = icon.dataset.modalId; // get the modal id from the data-modal attribute
      const modalEl = document.getElementById(modalId); // select the modal

      switch (icon.id) {
        case "printerBtn--open":
          window.print(); // opens the window's print method
          break;
        case "chuckBtn--open":
          try {
            const joke = await fetchJokes(); // wait for fetchJokes to complete
            jokeParagraph.innerText = joke;
            displayModal(modalEl); // display modal once joke has been updated
          } catch (e) {
            console.error("Error fetching joke:", e);
          }
          break;
        case "chuckBtn--open":
          try {
            const joke = await fetchJokes(); // wait for fetchJokes to complete
            jokeParagraph.innerText = joke;
            displayModal(modalEl); // display modal once joke has been updated
          } catch (e) {
            console.error("Error fetching joke:", e);
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
