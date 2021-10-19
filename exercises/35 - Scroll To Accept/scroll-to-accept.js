const terms = document.querySelector(`.terms-and-conditions`);
const watch = document.querySelector(`.watch`);

function obCallback(payload) {
  console.log(payload);
}
const ob = new IntersectionObserver(obCallback);

ob.observe(watch);
