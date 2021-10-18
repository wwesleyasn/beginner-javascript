console.log(`It Works`);

const butts = document.querySelector(`.butts`);
const coolButton = document.querySelector(`.cool`);

// Setting a function to be used within Event Listener instead of anonymous function
function handleClick() {
  console.log(`Button Has Been Clicked`);
}

// // Event Listener using anonymous function
// butts.addEventListener(`click`, () => {
//   console.log(`It Got Clicked`);
// });

// Event Listener using a set function
butts.addEventListener(`click`, handleClick);
coolButton.addEventListener(`click`, handleClick);

butts.removeEventListener(`click`, handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll(`button.buy`);

function handleBuyButtonClick(event) {
  console.log(`You Clicked A Button`);
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener(`click`, handleBuyButtonClick);
});

window.addEventListener(
  `click`,
  (event) => {
    console.log(`You Clicked On The Window`);
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector(`.photo`);

photoEl.addEventListener(`mouseenter`, (event) => {
  console.log(event.currentTarget);
  console.log(this);
});
