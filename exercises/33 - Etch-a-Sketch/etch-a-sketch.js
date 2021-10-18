// Select the elements on the page - canvas, shake button
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);

const shakebutton = document.querySelector(`.shake`);

// Setup our canvas for drawing

const { width } = canvas;
const { height } = canvas;

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = `10`;

ctx.beginPath(); // Start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Clear / shake function

// Listen for arrow keys
