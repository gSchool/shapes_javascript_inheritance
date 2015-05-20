var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.area()).toEqual(8);
    });
  });

  // Write more specs!!
});
