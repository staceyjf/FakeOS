import fetchJokes from "../logic/fetchJokes.js";
// Modals

// a new scope if fired for each click even
export function openModal({ icons, jokeParagraph }) {
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
            console.log(joke);
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

// TO DO refactor into one reusable function
export function closeModal({ modals }) {
  modals.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
      const modalId = modalCloseBtn.dataset.modalId;
      const modalEl = document.getElementById(modalId);
      console.log("this is modaEl", modalEl);
      switch (modalCloseBtn.id) {
        case "printerBtn":
          console.log(
            "printer doesn't need a case but will keep for refactoring into one function"
          );
          break;
        case "chuckBtn--close":
          hidModal(modalEl);
          console.log("Chuck has closed", modalCloseBtn);
          break;
        default:
          throw new Error("There has been an error with closing the modal");
      }
    });
  });
}

// open
function displayModal(modalEl) {
  modalEl.classList.add("show");
}

// close
function hidModal(modalEl) {
  modalEl.classList.remove("show");
}
