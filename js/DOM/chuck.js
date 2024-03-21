// NODES

// event listener
document.getElementById("ChuckJokeBtn").addEventListener("submit", (event) => {
  event.preventDefault();

  const jokeText = document.getElementById("chuckText");
  const categorySelection = document.getElementById("chuckCategory");

  console.log("joke: ", jokeText, "category ", categorySelection);
});

export function addJokes() {
  if (!jokeText) {
    // make the generic call
    return;
  }
}

function updateJokes(event) {
  const userChoice = event.target.value;
  console.log(userChoice); // This will log the value of the selected option
}

// // if it doesn't exist create it, otherwise just update the innerText
//   if (!document.querySelector("#resultPara")) {
//     createElement(
//       "p",
//       resultStr,
//       document.querySelector("#totalDisplay"),
//       "resultPara"
