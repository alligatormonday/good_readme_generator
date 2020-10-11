// Constants to pass packages through 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
    /* Pass your questions in here */
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'Author',
    message: 'What is your name?',
},
{
    type: 'input',
    name: 'Description',
    message: 'Enter a description of your project',
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of Contents',
},
{
    type: 'input',
    name: 'Installation',
    message: 'Installation instructions',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Usage instructions',
},
{
    type: 'input',
    name: 'Contributors',
    message: 'Contributors',
},
{
    type: 'input',
    name: 'Testing',
    message: 'Testing',
},
{
    type: 'input',
    name: 'Email',
    message: 'What is your email?',
},
{
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?',
},
{
    type: 'list',
    name: 'License',
    message: 'License',
    choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0'],
},
];

inquirer.prompt(questions)

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
// inquirer.prompt(
    // pass questions

};

// function call to initialize program
init();
