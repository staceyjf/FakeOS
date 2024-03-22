import fetchJokes from "../logic/fetchJokes.js";

// NODES
export default function handleJokeSubmit(jokeParagraph) {
  // grab the form only after its initialised
  document
    .getElementById("chuckForm")
    .addEventListener("submit", async (event) => {
      //add eventlistener
      event.preventDefault();
      const category = document.getElementById("chuckCategory");
      const categoryChoice = category.value; //grab the user choice
      // console.log(categoryChoice);
      const joke = await fetchJokes(categoryChoice); // wait for the joke to return
      jokeParagraph.innerText = joke; // update the joke
    });
}
