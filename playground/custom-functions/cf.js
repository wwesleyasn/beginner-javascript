// function definition
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  // this is the function body
  console.log(`Running Calculate Bill`);
  const total = billAmount * (1 + taxRate);
  return total;
}

// function run
const wesTotal = 500;
const wesTaxRate = 0.5;
const myTotal = calculateBill(wesTotal, wesTaxRate);
console.log(myTotal);
