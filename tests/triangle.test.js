const { Triangle } = require("../lib/shapes");

describe("Triangle class", () => {

  const triangle = new Triangle('a', 'b', 'c');

   test("when a new instance of the triangle class is created i expect it to be an object", () => {
    expect(typeof triangle).toEqual("object");
  });

  test("When I call the render method I expect it to return the svg string.", () => {
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points='150, 18 244, 182 56, 182' fill= 'a' /><text x="150" y="145" font-size="50" text-anchor="middle" fill="b">c</text></svg>`)
  });

});