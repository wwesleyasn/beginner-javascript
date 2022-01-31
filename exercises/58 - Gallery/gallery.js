// The idea is that we are creating a plugin to use on the page
function Gallery(gallery) {
  if (!gallery) {
    throw new Error(`No Gallery Found`);
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector(`.modal`);
  const prevButton = modal.querySelector(`.prev`);
  const nextButton = modal.querySelector(`.next`);
  let currentImage;

  // make a function to open the modal

  function openModal() {
    console.info(`Opening Modal...`);

    // check if modal is already open

    if (modal.matches('.open')) {
      console.info(`Modal Already Open`);
      return; // stop the function from running
    }
    modal.classList.add('open');

    // Event Listeners to be bound to when we open the modal

    modal.addEventListener(`click`, handleClickOutside);

    window.addEventListener(`keyup`, handleKeyUp);

    nextButton.addEventListener(`click`, showNextImage);

    prevButton.addEventListener(`click`, showPrevImage);
  }

  function closeModal() {
    modal.classList.remove('open');

    // TODO: add event listener for clicks and keyboards

    // Event Listeners to be removed when we close the modal

    modal.removeEventListener(`click`, handleClickOutside);

    window.removeEventListener(`keyup`, handleKeyUp);

    nextButton.removeEventListener(`click`, showNextImage);

    prevButton.removeEventListener(`click`, showPrevImage);
  }

  // create a function that listens for a click outside of the modal inner div

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      console.info(`Closing Modal...`);
      closeModal();
    }
  }

  // function that is listening for key

  function handleKeyUp(event) {
    if (event.key === 'Escape') return closeModal();
    if (event.key === `ArrowRight`) return showNextImage();
    if (event.key === `ArrowLeft`) return showPrevImage();
  }

  // function that is listening for a click on the next arrow

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  // function that is listening for a click on the back arrow

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // when someone clicks on an image, update the modal with the assocaited image and pop up modal

  function showImage(el) {
    if (!el) {
      console.info(`No Image To Show`);
      return;
    }

    // update the modal with this info

    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // function handleImageClick(event) {
  //   showImage(event.currentTarget);
  // }

  // images.forEach((image) => image.addEventListener(`click`, handleImageClick));

  // the above function can be refactored in the following way

  // These are our event listeners

  images.forEach((image) =>
    image.addEventListener(`click`, (e) => showImage(e.currentTarget))
  );

  // loop over each image, attach an event listener for each image, and when that is key upped, check if it was enter, if it was, show that image

  images.forEach((image) =>
    image.addEventListener(`keyup`, (e) => {
      if (e.key === `Enter`) {
        showImage(e.currentTarget);
      }
    })
  );
}

// Using the plugin on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
