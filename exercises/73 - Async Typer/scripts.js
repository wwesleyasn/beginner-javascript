function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}
// // Async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     // wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawletter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // exit condition
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawletter();
      // wait for some time
    }
    drawletter();
  }
  // when this function draw() runs, kick off drawLetter
  drawletter();
}

document.querySelectorAll(`[data-type]`).forEach(draw);
