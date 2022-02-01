let data;
let meteroits = [];
let htmlElement;

function preload() {

  data = loadTable('03_meteroits.csv', 'ssv', 'header');
}

function setup() {
  createCanvas(2000, 3000);
  background(0);

  htmlElement = createP("HELLO WORLD");
  htmlElement.position(50, 10);
  htmlElement.addClass("Hover");

  let numRows = data.getRowCount();

  let name = data.getColumn("name");
  let mass = data.getColumn("mass");
  let year = data.getColumn("year");


  for (let i = 0; i < numRows; i++) {
    meteroits[i] = new Meteroit(5 * i, 500, name[i], mass[i], year[i]);
  }
  console.log(meteroits);
}

function draw() {
  background(0);

  for (let i = 0; i < meteroits.length; i++) {
    meteroits[i].show();
    meteroits[i].hover(mouseX, mouseY);
  }

}


class Meteroit {
  constructor(x, y, name, mass, year) {
    this.x = x;
    this.y = y;
    this.name = name
    this.mass = mass
    this.year = year
  }


  hover(x, y) {
    let distance = dist(x, y, this.x, this.y);
    if (distance < this.mass / 50000) {
      htmlElement.html(this.name);
    }

  }

  show() {
    fill(255, 75);
    noStroke();
    ellipse(this.x, this.y, this.mass / 50000);
  }
}