export default async function fetchJokes(category = null) {
  let url = "https://api.chucknorris.io/jokes/random";

  if (!category) {
    url += `?category=animal`; // to avoid the weirder jokes
  }

  // making category optional by giving it a default value of null
  if (category) {
    url += `?category=${category}`; //endpoint with user choice of category
  }

  // console.log(url); // output https://api.chucknorris.io/jokes/random?category=animal

  const response = await fetch(url);
  const data = await response.json();

  // console.log(data.categories); // output to test if its producing the right category

  return data.value;
}
