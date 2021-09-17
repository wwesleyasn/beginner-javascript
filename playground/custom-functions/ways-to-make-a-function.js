console.log(`It Works`);

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

const add = (a, b = 3) => a + b;
