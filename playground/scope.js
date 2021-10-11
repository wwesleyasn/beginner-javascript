// const age = 100;

// function go() {
//   const hair = `blonde`;
//   const myAge = 200;
//   console.log(age);
//   console.log(hair);
//   console.log(myAge);
// }

// go();
/*eslint-disable*/
// function isCool(name) {
//   if (name === `Wes`) {
//     var cool = true;
//   }
//   return cool;
// }

const dog = `Snickers`;

function logDog(){
  console.log(dog);
}

function go() {
  const dog = `Sunny`;
  logDog();
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase())
  }
  yell();
}