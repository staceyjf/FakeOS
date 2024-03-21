import addJokes from "../logic/fetchJokes.js";

export function openModal({ icons, jokeParagraph, category }) {
  // add an event listener to all relevant icons
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      switch (icon.id) {
        case "printerBtn":
          console.log("printer is working");
          window.print(); // opens the built print function
          break;
        case "chuckBtn":
          displayModal(icon.id);
          console.log("Chuck has been opened");
          addJokes(jokeParagraph, category);
          break;
        default:
          alert("This icon is just for show");
      }
    });
  });
}

export function displayModal() {}

export function closeModal() {}
