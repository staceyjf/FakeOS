import createNotes from "../DOM/userNote.js";

// NODES
export default function handleNotesSubmission() {
  document
    .getElementById("formSubmitBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const form = document.getElementById("notesForm");
      const userHeaderEl = form.querySelector("input");
      const userHeader = userHeaderEl.value;
      const userBodyEl = form.querySelector("textarea");
      const userBody = userBodyEl.value;

      console.log(userHeader);
      console.log(userBody);

      createNotes(userHeader, userBody);
    });
}
