import addJokes from "../logic/fetchJokes.js";
// Modals
const modalCloseBtns = document.querySelectorAll(".modal--close");
console.log("this are my close btns", modalCloseBtns);

// a new scope if fired for each click even
export function openModal({ icons, jokeParagraph, category }) {
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const modalId = icon.dataset.modalId; // get the modal id from the data-modal attribute
      const modalEl = document.getElementById(modalId); // select the modal
      switch (icon.id) {
        case "printerBtn--open":
          console.log("printer is working");
          window.print(); // opens the window's print method
          break;
        case "chuckBtn--open":
          displayModal(modalEl);
          console.log("Chuck has been opened", icon);
          addJokes(jokeParagraph, category);
          break;
        default:
          alert("This icon is just for show");
      }
    });
  });
}

// TO DO refactor into one reusable function
export function closeModal({ modals }) {
  modalCloseBtns.forEach((modalCloseBtn) => {
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
