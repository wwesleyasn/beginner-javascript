const baseEndpoint = `https://recipes.beginnerjavascript.com/api`;
const proxy = `https://cors-anywhere.herokuapp.com/`;

const form = document.querySelector(`form.search`);

const recipesGrid = document.querySelector(`.recipes`);

function displayRecipes(recipes) {
  console.log(`Creating HTML`);
  const html = recipes.map(
    (recipe) => `<div class="recipe">
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    ${
      recipe.thumbnail &&
      `<img src="${recipe.thumbnail}" alt="${recipe.title}" class="recipe-image"/>`
    }
    <a href="${recipe.href}">View Recipe</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join(``);
}

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  // turn form off
  form.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(query);
  console.log(recipes);
  // turn it back on
  form.submit.disabled = false;
  // display results
  displayRecipes(recipes.results);
}

form.addEventListener(`submit`, handleSubmit);
