import fetchJokes from "../logic/fetchJokes.js";
// Modals

// a new scope if fired for each click even
export default function openModal({ icons, jokeParagraph }) {
  icons.forEach((icon) => {
    console.log(icon.id);
    icon.addEventListener("click", async () => {
      let modalId = icon.dataset.modalId; // get the modal id from custom HTML attribute
      console.log(`modalId: ${modalId}`); // log the modalId

      let modalEl = document.getElementById(modalId); // select the modal
      console.log(modalEl); // log the modalEl

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
          console.log(`${icon.id} is opening ${modalEl}`);
          displayModal(modalEl);
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
