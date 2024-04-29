const { Square } = require("../lib/shapes");

describe("Square class", () => {

  const square = new Square('a', 'b', 'c');

   test("when a new instance of the square class is created i expect it to be an object", () => {
    expect(typeof square).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string.", () => {
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="100" y="50" fill= 'a' /><text x="175" y="140" font-size="60" text-anchor="middle" fill="b">c</text></svg>`)
  });

});