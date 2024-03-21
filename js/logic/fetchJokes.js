export default async function addJokes(category, jokeParagraph) {
  let url = "https://api.chucknorris.io/jokes/random";
  // if there is a user choice for input
  console.log(category);

  if (category) {
    url += `?category=${category}`; //endpoint
  }

  const response = await fetch(url);
  const data = await response.json();
  let joke = data.value;
}
