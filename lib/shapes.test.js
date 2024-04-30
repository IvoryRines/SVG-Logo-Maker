// Test for Triangle Class

const { Triangle } = require("./shapes");

describe("Triangle class", () => {

  const triangle = new Triangle('yellow', 'b', 'c');

   test("when a new instance of the triangle class is created i expect it to be an object", () => {
    expect(typeof triangle).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string with the given color.", () => {
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points='150, 18 244, 182 56, 182' fill= 'yellow' /><text x="150" y="145" font-size="50" text-anchor="middle" fill="b">c</text></svg>`)
  });

});



// Test for Circle Class

const { Circle } = require("./shapes");

describe("Circle class", () => {

  const circle = new Circle('pink', 'b', 'c');

   test("when a new instance of the circle class is created i expect it to be an object", () => {
    expect(typeof circle).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string with the given color.", () => {
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx='150' cy='100' r='80' fill= 'pink' /><text x="150" y="125" font-size="60" text-anchor="middle" fill="b">c</text></svg>`)
  });

});



// Test for Square Class

const { Square } = require("./shapes");

describe("Square class", () => {

  const square = new Square('blue', 'b', 'c');

   test("when a new instance of the square class is created i expect it to be an object", () => {
    expect(typeof square).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string with the given color.", () => {
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="100" y="50" fill= 'blue' /><text x="175" y="140" font-size="60" text-anchor="middle" fill="b">c</text></svg>`)
  });

});