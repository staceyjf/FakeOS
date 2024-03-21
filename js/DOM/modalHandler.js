import addJokes from "../logic/fetchJokes.js";
// Modals
const modalCloseBtns = document.querySelectorAll(".modal--close");
console.log("this are my close btns", modalCloseBtns);

export function openModal({ icons, jokeParagraph, category }) {
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      switch (icon.id) {
        case "printerBtn":
          console.log("printer is working");
          window.print(); // opens the window's print method
          break;
        case "chuckBtn":
          displayModal();
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
  // add an event listener to all modals
  modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
      switch (modalCloseBtn.id) {
        case "printerBtn":
          console.log(
            "printer doesn't need a case but will keep for refactoring into one function"
          );
          break;
        case "chuckCloseBtn":
          hidModal(modalCloseBtn);
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

function findModal(btnId) {
  return document.getElementById(id);
}
