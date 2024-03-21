import fetchJokes from "../logic/fetchJokes.js";

// NODES
function addEventListener() {
  // event listener
  document
    .getElementById("ChuckJokeBtn")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const jokeText = document.getElementById("chuckText");
      const categorySelection = document.getElementById("chuckCategory");

      console.log("joke: ", jokeText, "category ", categorySelection);
    });
}

export function addJokes() {
  if (!jokeText) {
    // make the generic call
    return;
  }
}
