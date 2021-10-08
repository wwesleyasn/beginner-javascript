console.log(`Console Is Running`);

// Anonymous function
// function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Function expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// just a normal function
// function inchToCM(inches) {
//   const cm = inches * 2.4;
//   return cm;
// }

// // same function but trimmed down
// function inchToCM(inches) {
//   return inches * 2.4;
// }

// // same function but trimmed down and anonymous
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

/* eslint-disable*/
// same function but trimmed down even more and anonymous
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// Arrow function
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

//const add = (a, b = 3) => a + b;

//returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

// const makeABaby =  (first, last) => ({ name: `${first} ${last}`, age: 0 });

//IIFE
//Immediately Invoked Function Expression

(function(age) {
  return `You Are Cool and age ${age}`;
})(10);

//Methods

const wes = {
  name: `Wes Bos`,
  sayHi: function() {
    console.log(`Hey Wes`);
    return `Hey Wes`;
  },
  //Short hand Version
  yellHi() {
    console.log(`HEY WES`);
  },
  //Arrow version
  whisperHi: () => {console.log(`hey wes`)}
}

//Callback Functions
//Click Callback

const button = document.querySelector(`.clickMe`);

// button.addEventListener(`click`, wes.yellHi);
button.addEventListener(`click`, function() {
  console.log(`Button Is Working`);
})

//Timer Callback
setTimeout(function () {
  console.log(`Time Has Expired`);
}, 1000);

setTimeout(() => {console.log(`Time Is Ticking`)}, 2000);