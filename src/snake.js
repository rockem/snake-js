function Snake(canvasDim) {
  this.canvasDim = canvasDim

  this.sprites = function() {
      return [new SnakeHead(
        [Math.floor(this.canvasDim[0]/2), Math.floor(this.canvasDim[1]/2)])]
  }
}
