console.log(`It Works`);

const myParagraph = document.createElement(`p`);
myParagraph.textContent = `I am a Paragraph`;
myParagraph.classList.add(`special`);

const myImage = document.createElement(`img`);
myImage.src = `https://picsum.photos/500`;
myImage.alt = `Nice Photo`;

const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);

const myFlexDiv = document.createElement('div');
// The following works as a toggle, best practice would be to make toggleflex its own function
myFlexDiv.addEventListener(`click`, () => {
  myFlexDiv.classList.toggle(`toggleflex`);
});

// First working example of adding HTML to the body. Not the optimal way
// document.body.appendChild(myDiv);
// myDiv.appendChild(myImage);
// myDiv.appendChild(myParagraph);

const myHeading = document.createElement(`h2`);
myHeading.textContent = `My Super Heading`;

// Optimal way of adding HTML to the body
myFlexDiv.appendChild(myImage);
myFlexDiv.appendChild(myParagraph);
myDiv.appendChild(myFlexDiv);
myDiv.insertAdjacentElement(`afterbegin`, myHeading);
document.body.appendChild(myDiv);

const listDiv = document.createElement(`div`);
const list = document.createElement(`ul`);
const item1 = document.createElement(`li`);
const item2 = document.createElement(`li`);
const item3 = document.createElement(`li`);
const item4 = document.createElement(`li`);
const item5 = document.createElement(`li`);

listDiv.classList.add(`wrapper`);

item1.textContent = `I am Item1`;
item2.textContent = `I am Item2`;
item3.textContent = `I am Item3`;
item4.textContent = `I am Item4`;
item5.textContent = `I am Item5`;

list.appendChild(item2);
list.appendChild(item3);
list.insertAdjacentElement(`afterbegin`, item1);
list.appendChild(item4);
list.insertAdjacentElement(`beforeend`, item5);
listDiv.appendChild(list);
document.body.appendChild(listDiv);
