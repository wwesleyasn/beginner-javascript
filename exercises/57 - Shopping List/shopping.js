const shoppingForm = document.querySelector(`.shopping`);
const list = document.querySelector(`.list`);

// we need an array to hold out state. see notes for state
const items = [];

// listen for a submit event on the form
function handleSubmit(e) {
  e.preventDefault();
  console.log(`submitted!`);

  // how do we grab the information that is being submitted so we can use it
  const name = e.currentTarget.item.value;

  // if it is empty, then do not submit it
  if (!name) return;

  // taking the item and giving it unique values
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // push the item into our state
  items.push(item);
  console.log(`There are now ${items.length} item(s) in your state`);

  // clear the form
  e.target.reset();

  // fire off a custom event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent(`itemsUpdated`));
}

// display the items within the state
function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join(``);
  // adding this new html to the list
  list.innerHTML = html;
}

shoppingForm.addEventListener(`submit`, handleSubmit);

// we are passing in the CustomEvent, itemsUpdated, that is created above instead of running display items directly within the handleSubmit function
list.addEventListener(`itemsUpdated`, displayItems);
