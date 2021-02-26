const canvasWidth = 600;
const diameter = canvasWidth - 100;
const r = diameter / 2;
const N = 100;

const increment = 0.01

const smallDiameter = 5;

let theta;
let n = 0;
let slider;
let startingX;
let startingY;

function setup() {
  theta = TWO_PI / N;
  startingX = (windowWidth - diameter) / 2;
  startingY = windowHeight / 2;
  slider = createSlider(-0.05, 0.05, 0.0018, 0.0001)
  slider.position(windowWidth/2 - 50 , windowHeight - 100);
  slider.style('width', '100px');
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  n += slider.value();
  background(0);
  stroke('white')
  drawText()
  noFill()

  for (let i = 0; i < N; i++) {

    let x = startingX + r * (1 - cos(theta * i));
    let y = startingY - r * sin(theta * i);

    let toX = startingX + r * (1 - cos(theta * n * i));
    let toY = startingY - r * sin(theta * n * i);

    const red = map(n, 0, 1, 0, 255);
    const green = map(n, 1, 2, 0, 255);
    const blue = map(n, 2, 3, 0, 255);

    stroke(red, green, blue)
      // stroke('white')
    line(x, y, toX, toY);
    stroke('white')
    //drawPoint(x, y);
  }
  circle(windowWidth / 2, windowHeight / 2, diameter);
}

function drawText() {
  textSize(20);
  text('n=' + n.toFixed(2), windowWidth / 2 - 100, 20);
  text('step=' + slider.value().toFixed(7), windowWidth / 2 - 100, 40);
}

function drawPoint(x, y) {
  fill('red')
  circle(x, y, smallDiameter);
}