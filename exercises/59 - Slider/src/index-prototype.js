function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error(`No Slider passed in`);
  }

  // select the elements needed for the slider
  this.slides = slider.querySelector(`.slides`);
  this.slider = slider;
  const prevButton = slider.querySelector(`.goToPrev`);
  const nextButton = slider.querySelector(`.goToNext`);

  // when this slider is created, run the start slider function
  this.startSlider();
  this.applyClasses();

  // Event listeners
  prevButton.addEventListener(`click`, () => this.move(`back`));
  nextButton.addEventListener(`click`, this.move.bind(this));
}

Slider.prototype.startSlider = function () {
  this.current =
    this.slider.querySelector(`.current`) || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  console.log({ current: this.current, prev: this.prev, next: this.next });
};

Slider.prototype.applyClasses = function () {
  this.current.classList.add(`current`);
  this.prev.classList.add(`previous`);
  this.next.classList.add(`next`);
};

Slider.prototype.move = function (direction) {
  // first strip all the classes from current slides
  const classesToRemove = [`prev`, `current`, `next`];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === `back`) {
    // make a new array of the new values, and destructure them over into the prev, current, and next variables
    [this.prev, this.current, this.next] = [
      // get the previous slide, if there is none, grab the last slide from the entire slider for wrapping
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      // grab the next slide, or if it's at the end, loop around to the first slide
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const mySlider = new Slider(document.querySelector(`.slider`));
const dogSlider = new Slider(document.querySelector(`.dog-slider`));

console.log(mySlider, dogSlider);
