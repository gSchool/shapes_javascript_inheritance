var Shape = require("./shape");

function Square(sides, color, sideLength) {
  Shape.call(sides, color);
  this.sideLength = sideLength;
}

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
