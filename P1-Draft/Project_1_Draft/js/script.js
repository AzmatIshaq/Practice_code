/**
Project 1
Azmat Ishaq

This is a Javascript game made for the CART253 Class at Concordia University.
This is a game where you can play as Gabe Newell or a Half Life fan. The objective, if you are Gabe, is to avoid the fans from convincing you to make Half Life 3. Just dodge, what they throw at you. Make sure your CONVINCE BAR doesn't fill to the max! If it does, Gabe will have to make Half Life 3 and you will lose the game.

If you are a fan, your objective is to fill the CONVINCE BAR to the max in order to persuade.

Use the arrow keys to move your character. Use the space bar to launch objects if you are a fan.
*/

"use strict";

let squareGaben = {
  x: 250,
  y: 450,
};
let squareFan = {
  x: 250,
  y: 25,
};

let circleH3  = {
  x: squareFan.x,
  y: squareFan.y,
};

let barkSFX = undefined;

let h3IconImg = undefined;

let gabbenImg = undefined;

/**
Description of preload
*/
function preload() {

h3IconImg = loadImage(`assets/images/half_life_logo_pixelated.png`);
gabbenImg = loadImage(`assets/images/Gabe_pixelated.jpg`);

barkSFX = loadSound(`assets/sounds/bark.wav`);

}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  rect(squareGaben.x, squareGaben.y, 100, 100);
  rectMode(CENTER);
  rect(squareFan.x, squareFan.y, 40, 40);

  ellipseMode(CENTER);
  ellipse(circleH3.x, circleH3.y, 10);


// Light show to add ambiance
push()
  for (let i = 0; i < 1; i++) {
  let x1 = random(0, width);
  let y1 = random(0, width);
  let x2 = random(0, width);
  let y2 = random(0, width);
  stroke(0, 255, 0);
  line(x1, y1, x2, y2);
}
pop()

  if (1 === 1) {
    circleH3.y = circleH3.y + 3;
    circleH3.x = circleH3.x + random(-10,10);
  }

  if (circleH3.y === 499) {

    circleH3.y = squareFan.y;
    circleH3.x = squareFan.x;

  }

  if (keyIsDown(LEFT_ARROW)){
      squareGaben.x = squareGaben.x - 2;
    }
  if (keyIsDown(RIGHT_ARROW)){
      squareGaben.x = squareGaben.x + 2;
    }

imageMode(CENTER);
image(gabbenImg, squareGaben.x, squareGaben.y, 100, 100);

imageMode(CENTER);
image(h3IconImg, circleH3.x, circleH3.y, 50, 50);


}

  // if (circleH3.x === 0 || 500) {
  //   circleH3.x = squareFan.x;
  // }

  // squareFan movement



function mousePressed() {
  barkSFX.play();
}
