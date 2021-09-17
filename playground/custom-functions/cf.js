// function definition
function calculateBill(billAmount, taxRate = 0.07, tipRate = 0.2) {
  // this is the function body
  console.log(`Running Calculate Bill`);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function run
const wesTotal = 500;
const wesTaxRate = 0.5;
// const myTotal = calculateBill(wesTotal, wesTaxRate);
// console.log(myTotal);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// function run
// const greeting = sayHiTo(`Wes`);
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 30, 0.2);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = `Silly Goose`) {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.4);
console.log(myBill4);
