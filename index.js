// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/questions');
const { Triangle, Circle, Square } = require('./lib/shapes');


// A function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const {shapeChoice, shapeColor, textColor, text} = userAnswers;
        let svgShape;
        switch (shapeChoice) {
            case 'triangle':
             svgShape = new Triangle(shapeColor, textColor, text);
                break;
            case 'circle':
             svgShape = new Circle(shapeColor, textColor, text);
                break;
            case 'square':
             svgShape = new Square(shapeColor, textColor, text);
                break;
        }
   
        fs.writeFileSync('examples/logo.svg', svgShape.render());
    })
}

// Function call to initialize app
init();