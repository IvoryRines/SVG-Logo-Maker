// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like inside your logo?',
        validate: function(answer) {
            if(answer.length > 3 ) {
                return false;
            }
            return true;

        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be (must be a valid color or hexidecimal)?',
    },

    {
        type: 'list',
        name: 'shapeChoice',
        message: 'What shape would you like for your logo?',
        choices: ['circle', 'triange', 'square']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the logo to be?'
    },
];

module.exports = questions