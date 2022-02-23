const baseEndpoint = `http://wwww.recipepuppy.com/api`;

async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
}

fetchRecipes(`pizza`);
