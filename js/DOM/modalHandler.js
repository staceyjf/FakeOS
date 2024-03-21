export function openModal(allIcons) {
  // add an event listener to all relevant icons
  allIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      switch (icon.id) {
        case icon.id === "printerBtn":
          console.log("printer is working");
          window.print(); // opens the built print function
          break;
        // case id === "printerBtn":
        // window.print(); // opens the built print function
        // break;
        default:
          alert("This icon is just for show");
      }
    });
  });
}

export function createModal(icon) {}

export function closeModal(icon) {}
