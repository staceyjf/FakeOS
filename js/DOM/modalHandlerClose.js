// TO DO refactor into one reusable function
export default function closeModal({ modals }) {
  modals.forEach((modalCloseBtn) => {
    console.log(modalCloseBtn.id);
    modalCloseBtn.addEventListener("click", () => {
      const modalId = modalCloseBtn.dataset.modalId;
      const modalEl = document.getElementById(modalId);

      switch (modalCloseBtn.id) {
        case "printerBtn":
          console.log(
            "printer doesn't need a case but will keep for refactoring into one function"
          );
          break;
        case "chuckBtn--close":
          hidModal(modalEl);
          break;
        case "clockDateBtnClose":
          hidModal(modalEl);
          console.log(`${modalCloseBtn.id} has closed ${modalEl.id}`);
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
