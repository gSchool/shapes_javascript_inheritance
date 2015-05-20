var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.area()).toEqual(20);
    });
  });

  // Write more specs!!
});
