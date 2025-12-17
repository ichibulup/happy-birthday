// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

const fireworks = [];
let gravity;
let isHopQuaPage = false;

function setup() {
  isHopQuaPage = document.getElementById('p5-container') !== null;
  
  let canvas;
  if (isHopQuaPage) {
    // On hop-qua.html - append canvas to p5-container
    let container = document.getElementById('p5-container');
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent('p5-container');
  } else {
    // On firework.html - full screen
    canvas = createCanvas(windowWidth, windowHeight);
  }
  
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  
  if (isHopQuaPage) {
    background(255, 255, 255, 0);
  } else {
    background(0);
  }
}

function draw() {
  colorMode(RGB);
  
  if (isHopQuaPage) {
    // Clear canvas but keep it transparent for hop-qua
    clear();
  } else {
    // Dark background for firework page
    background(0, 0, 0, 25);
  }

  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
