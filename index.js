// Constants
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [{
    /* Pass your questions in here */
    type: 'input',
    name: 'yourName',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'languagesKnown',
    message: 'What languages do you know?',
},
{
    type: 'input',
    name: 'preferredCommunication',
    message: 'What is your preferred method of communication?',
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
// inquirer.prompt(
    // pass questions
)
}

// function call to initialize program
init();
