function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error(`No Slider passed in`);
  }
  // create some variables for working with the slider
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector(`.slides`);
  const prevButton = slider.querySelector(`.goToPrev`);
  const nextButton = slider.querySelector(`.goToNext`);

  function startSlider() {
    current = slider.querySelector(`.current`) || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add(`current`);
    prev.classList.add(`previous`);
    next.classList.add(`next`);
  }

  function move(direction) {
    // first strip all the classes from current slides
    const classesToRemove = [`prev`, `current`, `next`];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === `back`) {
      // make a new array of the new values, and destructure them over into the prev, current, and next variables
      [prev, current, next] = [
        // get the previous slide, if there is none, grab the last slide from the entire slider for wrapping
        prev.previousElementSibling || slides.lastElementChild,
        prev,
        current,
      ];
    } else {
      [prev, current, next] = [
        current,
        next,
        // grab the next slide, or if it's at the end, loop around to the first slide
        next.nextElementSibling || slides.firstElementChild,
      ];
    }
    applyClasses();
  }

  // when this slider is created, run the start slider function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener(`click`, () => move(`back`));
  nextButton.addEventListener(`click`, move);
}

const mySlider = Slider(document.querySelector(`.slider`));
const dogSlider = Slider(document.querySelector(`.dog-slider`));
