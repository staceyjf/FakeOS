import { createElement } from "./utils.js";
import { hidModal } from "./modalHandlerClose.js";

export default function createNotes(userHeader, userBody) {
  console.log("header: " + userHeader);
  console.log("userBody: " + userBody);

  const desktop = document.querySelector(".desktop");
  const userNotesId = userHeader.replace(/\s/g, "").trim(); // remove any whitespace

  //create modal div
  const modalEl = createElement({
    elType: "div",
    parent: desktop,
    id: userNotesId, // give it an identifier so we can open it
    className: "modal show userNotes",
  });

  //create the note__container
  const userNoteContainerEl = createElement({
    elType: "div",
    parent: modalEl,
    className: "userNotes__container",
  });

  //create the note__container
  const headerDivEl = createElement({
    elType: "div",
    parent: userNoteContainerEl,
  });

  // create close button
  const closeSvgEl = createElement({
    elType: "svg",
    parent: headerDivEl,
    id: `${userNotesId}Btn--close`,
    className: "modal--close",
    attributes: {
      "data-modal-id": userNotesId,
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
  });

  // Create the rect element
  createElement({
    elType: "rect",
    parent: closeSvgEl,
    attributes: {
      x: "0.5",
      y: "0.5",
      width: "15",
      height: "15",
      fill: "white",
      stroke: "black",
    },
  });

  // create header
  createElement({
    elType: "h3",
    text: userHeader,
    parent: headerDivEl,
    className: "userNotes__header",
  });

  // create body text
  createElement({
    elType: "p",
    text: userBody,
    parent: userNoteContainerEl,
    className: "userNotes__text",
  });

  //create icon - TO DO
  // createElement({
  //   elType: "button",
  //   parent: desktop,
  //   className: "icon",
  //   id: `notes${userNotesId}Btn`,
  //   attributes: {
  //     "data-modal-id": userNotesId,
  //   },
  // });

  hidModal(notes); // hid the note app to display the users notes
  addUserNotesEventListner(`${userNotesId}Btn--close`, userNotesId);
}

function addUserNotesEventListner(modalCloseBtnId, modalId) {
  const modalCloseBtn = document.getElementById(modalCloseBtnId);
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      const modalEl = document.getElementById(modalId);
      if (modalEl) {
        hidModal(modalEl);
      } else {
        console.error("No element was found with id " + modalId);
      }
    });
  } else {
    console.error("No element was found with id " + modalCloseBtnId);
  }
}
