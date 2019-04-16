let img;

function preload() {
  tri = loadImage('triangle.png');
  rectangle = loadImage('rect.png');
  purple = loadImage('purple.png');
  pink = loadImage('pink.png');
  orange = loadImage('orange.png');
  greeen = loadImage('green.png');
  cyan = loadImage('cyan.png');
  body = loadImage('body.png');


}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  image(tri, 50, 50, 50, 50);
  image(rectangle, 50, 50, 50, 50);
  image(purple, 50, 50, 50, 50);
  image(pink, 110, 50, 50, 50)
  image(orange, 110, 50, 50, 50)
  image(greeen, 110, 50, 50, 50)
  image(cyan, 110, 50, 50, 50)
  image(body, 110, 50, 50, 50)

}