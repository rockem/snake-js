var canvas = document.getElementById("main_canvas");
var ctx = canvas.getContext("2d");

const UNIT_SIZE = 10;
const GRID_DIM = [81, 61]

canvas.width = UNIT_SIZE * GRID_DIM[0]
canvas.height = UNIT_SIZE * GRID_DIM[1]

var snake = new Snake(GRID_DIM);
var drawer = new Drawer();

function draw() {
    drawer.draw(snake.sprites())
}
setInterval(draw, 10)


function Drawer() {

  this.draw = function(sprites) {
    for(var i in sprites) {
      rect(sprites[i].location[0] * UNIT_SIZE, sprites[i].location[1] * UNIT_SIZE,UNIT_SIZE ,'white');
    }
  }

  rect = function(x, y, size, color) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}
