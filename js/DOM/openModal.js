export default function openModal(allIcons) {
  // add an event listener to all relevant icons
  allIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      if (icon.id === "printerBtn") {
        console.log("printer is working");
        window.print(); // opens the
      } else {
        console.log("open a modal");
      }
    });
  });
}
