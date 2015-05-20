var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(4, color);
  this.sideLength = sideLength;
}

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
