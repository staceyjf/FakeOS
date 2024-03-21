export default async function fetchJokes(jokeParagraph, category = null) {
  let url = "https://api.chucknorris.io/jokes/random";

  // making catergory optional by giving it a default value of null
  if (category) {
    url += `?category=${category}`; //endpoint with user choice of catergory
  }

  console.log(url);

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data.value);
  return data.value;
}
