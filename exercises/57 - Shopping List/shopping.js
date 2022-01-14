const shoppingForm = document.querySelector(`.shopping`);
const list = document.querySelector(`.list`);

// we need an array to hold out state. see notes for state
let items = [];

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
      <input 
        value="${item.id}"
        type="checkbox"
        ${item.complete && `checked`}>
      <span class="itemName">${item.name}</span>
      <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
      >&times;</button>
  </li>`
    )
    .join(``);
  // adding this new html to the list
  list.innerHTML = html;
}

// create a function that mirrors what the list says to the browsers localstorage
// after exercise challenge yourslef to make this a conditional
function mirrorToLocalStorage() {
  console.log(`Mirroring Items to LocalStorage`);
  localStorage.setItem(`items`, JSON.stringify(items));
}

// on page load, restore from localstorage
function restoreFromLocalStorage() {
  console.log(`Restoring From LocalStorage`);

  // pull items from localstorage
  const lsItems = JSON.parse(localStorage.getItem(`items`));
  if (lsItems && lsItems.length > 0) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent(`itemsUpdated`));
  } else {
    console.log(`No Prior List`);
  }
}

function deleteItem(id) {
  console.log(`Item Has Been Deleted`, id);
  // update our items array without this deleted item
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent(`itemsUpdated`));
}

function markAsComplete(id) {
  console.log(`Marking As Complete`, id);
  // find the item you want
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent(`itemsUpdated`));
}

shoppingForm.addEventListener(`submit`, handleSubmit);

// we are passing in the CustomEvent, itemsUpdated, that is created above instead of running display items directly within the handleSubmit function
list.addEventListener(`itemsUpdated`, displayItems);
list.addEventListener(`itemsUpdated`, mirrorToLocalStorage);
// Event Delegation: listen for the click on the list <ul> then delegate the click over to the button if that is what was clicked
list.addEventListener(`click`, (e) => {
  const id = parseInt(e.target.value);
  if (e.target.matches(`button`)) {
    deleteItem(id);
  }
  if (e.target.matches(`input[type="checkbox"]`)) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
