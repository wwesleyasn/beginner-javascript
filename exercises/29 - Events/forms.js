console.log(`It Works`);

const wes = document.querySelector(`.wes`);

wes.addEventListener(`click`, (e) => {
  console.log(`You Clicked It`);
  const shouldChangePage = confirm(
    `This Website May Be Malicious! Do You Wish To Proceed?`
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener(`submit`, (e) => {
  const name = e.currentTarget.name.value;
  if (name.includes(`Chad`)) {
    alert(`Sorry Bro`);
    e.preventDefault();
  }
});

// function logEvent(e) {
//   console.log(e.type);
//   console.log(e.currentTarget.value);
// }

// signupForm.name.addEventListener(`keyup`, logEvent);
// signupForm.name.addEventListener(`keydown`, logEvent);
// signupForm.name.addEventListener(`focus`, logEvent);
// signupForm.name.addEventListener(`blur`, logEvent);

const grabPhoto = document.querySelector(`.photo`);

function handlePhotoClick(e) {
  if (e.type === `click` || e.key === `Enter`) {
    console.log(`You Clicked The Photo`);
  }
}

grabPhoto.addEventListener(`click`, handlePhotoClick);
grabPhoto.addEventListener(`keyup`, handlePhotoClick);
