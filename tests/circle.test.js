const { Circle } = require("../lib/shapes");

describe("Circle class", () => {

  const circle = new Circle('a', 'b', 'c');

   test("when a new instance of the circle class is created i expect it to be an object", () => {
    expect(typeof circle).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string.", () => {
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx='150' cy='100' r='80' fill= 'a' /><text x="150" y="125" font-size="60" text-anchor="middle" fill="b">c</text></svg>`)
  });

});