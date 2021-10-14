// const p = document.querySelector(`p`);
// const imgs = document.querySelectorAll(`.item img`);
// const item2 = document.querySelector(`.item2`);
// const item2Image = item2.querySelector(`img`);
// const heading = document.querySelector(`h2`);

// console.log(heading.textContent);
// console.log(heading.innerText);
// // heading.textContent = `Wes Is Cool`;
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector(`.pizza`);
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText(`beforeend`, `🍕`);
// pizzaList.insertAdjacentText(`afterbegin`, `🍕`);

// Classes
const pic = document.querySelector(`.nice`);
pic.classList.add(`open`);
pic.classList.remove(`cool`);

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle(`round`);
}

pic.addEventListener(`click`, toggleRound);

pic.alt = `placeholder image`;

const custom = document.querySelector(`.custom`);
console.log(custom.dataset);

custom.addEventListener(`click`, () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
