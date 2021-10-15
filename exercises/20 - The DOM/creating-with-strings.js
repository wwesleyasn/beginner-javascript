const item = document.querySelector(`.item`);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Super Cool Photo`;
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
