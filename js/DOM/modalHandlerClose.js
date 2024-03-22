// TO DO refactor into one reusable function
export default function closeModal({ modals }) {
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

// close
function hidModal(modalEl) {
  modalEl.classList.remove("show");
}
