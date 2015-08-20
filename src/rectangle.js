var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

 // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
function Rectangle(side1, side2, color) {
  Shape.call(this, 4, color)
}

module.exports = Rectangle;