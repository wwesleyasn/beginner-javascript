const video = document.querySelector(`.webcam`);
const canvas = document.querySelector(`.video`);
const ctx = canvas.getContext(`2d`);
const faceCanvas = document.querySelector(`.face`);
const faceCtx = faceCanvas.getContext(`2d`);
const faceDetector = new window.FaceDetector();
const optionsInputs = document.querySelectorAll(
  `.controls input[type="range"]`
);

const options = {
  SIZE: 10,
  SCALE: 1.25,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}
optionsInputs.forEach((input) => input.addEventListener(`input`, handleOption));

// Write a function to populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // Size the canvas to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // Ask the browser when the next animation phase is and tell it to rundetect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = `#ffc600`;
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // Draw the small face
  faceCtx.drawImage(
    // 5 source arguments
    video, // where does it come from
    face.x, // where do we start the source pull from
    face.y,
    face.width,
    face.height,
    // 4 draw arguments
    face.x, // where should we start drawing the x and y
    face.y,
    options.SIZE,
    options.SIZE
  );
  // Take face back out and draw it back at normal size
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start the source pull from
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing argument
    face.x - (width - face.height) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
