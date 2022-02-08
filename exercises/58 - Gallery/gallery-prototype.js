function Gallery(gallery) {
  if (!gallery) {
    throw new Error(`No Gallery Found`);
  }
  this.gallery = gallery;

  // select the elements we need
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector(`.modal`);
  this.prevButton = this.modal.querySelector(`.prev`);
  this.nextButton = this.modal.querySelector(`.next`);

  // Bind our methods to the instance when we need them
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // These are our event listeners
  this.images.forEach((image) =>
    image.addEventListener(`click`, (e) => this.showImage(e.currentTarget))
  );

  // loop over each image, attach an event listener for each image, and when that is key upped, check if it was enter, if it was, show that image
  this.images.forEach((image) =>
    image.addEventListener(`keyup`, (e) => {
      if (e.key === `Enter`) {
        this.showImage(e.currentTarget);
      }
    })
  );
  this.modal.addEventListener(`click`, this.handleClickOutside);
}

// make a function to open the modal
Gallery.prototype.openModal = function () {
  console.info(`Opening Modal...`);

  // check if modal is already open
  if (this.modal.matches('.open')) {
    console.info(`Modal Already Open`);
    return; // stop the function from running
  }

  this.modal.classList.add('open');

  // Event Listeners to be bound to when we open the modal
  window.addEventListener(`keyup`, this.handleKeyUp);
  this.nextButton.addEventListener(`click`, this.showNextImage);
  this.prevButton.addEventListener(`click`, this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');

  // Event Listeners to be removed when we close the modal
  window.removeEventListener(`keyup`, this.handleKeyUp);
  this.nextButton.removeEventListener(`click`, this.showNextImage);
  this.prevButton.removeEventListener(`click`, this.showPrevImage);
};

// create a function that listens for a click outside of the modal inner div
Gallery.prototype.handleClickOutside = function (e) {
  if (e.target === e.currentTarget) {
    console.info(`Closing Modal...`);
    this.closeModal();
  }
};

// function that is listening for key
Gallery.prototype.handleKeyUp = function (event) {
  if (event.key === 'Escape') return this.closeModal();
  if (event.key === `ArrowRight`) return this.showNextImage();
  if (event.key === `ArrowLeft`) return this.showPrevImage();
};

// function that is listening for a click on the next arrow
Gallery.prototype.showNextImage = function () {
  this.showImage(
    this.currentImage.nextElementSibling || this.gallery.firstElementChild
  );
};

// function that is listening for a click on the back arrow
Gallery.prototype.showPrevImage = function () {
  this.showImage(
    this.currentImage.previousElementSibling || this.gallery.lastElementChild
  );
};

// when someone clicks on an image, update the modal with the assocaited image and pop up modal
Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.info(`No Image To Show`);
    return;
  }

  // update the modal with this info
  console.log(el);
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

// Using the plugin on the page
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
