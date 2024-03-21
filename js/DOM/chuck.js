import fetchJokes from "../logic/fetchJokes.js";

// NODES
export default function handleJokeSubmit(jokeParagraph, category) {
  // grab the form only after its initialised
  document.getElementById("chuckForm").addEventListener("submit", (event) => {
    event.preventDefault();
    fetchJokes(jokeParagraph, category);
  });
}
