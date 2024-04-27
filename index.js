// Packages needed for this application
// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/questions');
const { Triangle, Square, Circle } = require('./lib/shapes');


// A function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const {shapeChoice, shapeColor, text, textColor} = userAnswers;
        let svgShape;
        switch (shapeChoice) {
            case 'circle':
             svgShape = new Circle(shapeColor, textColor, text);
                break;
            case 'triangle':
             svgShape = new Triangle(shapeColor, text, textColor);
                break;
            case 'square':
             svgShape = new Square(shapeColor, text, textColor);
                break;
        }
   
        fs.writeFileSync('logo.svg', svgShape.render());
    })
}

// Function call to initialize app
init();