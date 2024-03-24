import { createElement } from "./utils.js";

export default function createNotes(userHeader, userBody) {
  console.log("header: " + userHeader);
  console.log("userBody: " + userBody);

  const desktop = document.querySelector(".desktop");

  const userNotesId = userHeader.replace(/\s/g, "").trim(); // remove any whitespace

  //create the note__container
  const modalEl = createElement({
    elType: "div",
    parent: desktop,
    id: userNotesId, // give it an identifer so we can open it
    className: "modal userNotes",
  });

  //create the note__container
  const userNoteContainerEl = createElement({
    elType: "div",
    parent: modalEl,
    className: "notes__container",
  });

  // create close button
  // Create the rect element
  const rectEl = createElement({
    elType: "rect",
    parent: document.createElementNS("http://www.w3.org/2000/svg", "svg"), // Temporary parent
    attributes: {
      x: "0.5",
      y: "0.5",
      width: "15",
      height: "15",
      fill: "white",
      stroke: "black",
    },
  });

  // create close button
  createElement({
    elType: "svg",
    parent: userNoteContainerEl,
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
    children: [rectEl],
  });

  // create header
  createElement({
    elType: "h3",
    text: userHeader,
    parent: userNoteContainerEl,
    className: "notes__header",
  });

  // create body text
  createElement({
    elType: "p",
    text: userBody,
    parent: userNoteContainerEl,
    className: "notes__text",
  });

  //create icon
  createElement({
    elType: "button",
    text: userHeader.trim(),
    parent: desktop,
    className: "icon",
    id: `notes${userNotesId}Btn`,
    attributes: {
      "data-modal-id": userNotesId,
    },
  });
}
