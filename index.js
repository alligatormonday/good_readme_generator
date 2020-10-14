// Constants to pass packages through
const fs = require("fs");
const inquirer = require("inquirer");
// const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        /* Pass user questions in here */
        type: "input",
        name: "Title",
        message: "💡 What is the title of your project?",
    },
    {
        type: "input",
        name: "Author",
        message: "👤 Who is the author of this readme/project?",
    },
    {
        type: "input",
        name: "Description",
        message: "📃 Enter a description of your project",
    },
    {
        type: "input",
        name: "Installation",
        message: "📦 Enter installation instructions",
    },
    {
        type: "input",
        name: "Usage",
        message: "🚀 Enter usage instructions",
    },
    {
        type: "input",
        name: "Contributors",
        message: "🛠  How would like others to contribute?",
    },
    {
        type: "input",
        name: "Testing",
        message: "✅ Enter commands to test",
    },
    {
        type: "input",
        name: "Email",
        message: "💌 What is your email?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "👤 What is your GitHub username?",
    },
    {
        type: "list",
        name: "License",
        message: "📝 License",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
        ],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const toWrite = [];
    toWrite.push(generateMarkdown.projectTitle(data.Title));
    toWrite.push(generateMarkdown.projectBadge(data.License));
    toWrite.push(generateMarkdown.projectAuthor(data.Author));
    toWrite.push(generateMarkdown.projectContents());
    toWrite.push(generateMarkdown.projectDescription(data.Description));
    toWrite.push(generateMarkdown.projectInstallation(data.Installation));
    toWrite.push(generateMarkdown.projectUsage(data.Usage));
    toWrite.push(generateMarkdown.projectContributors(data.Contributors));
    toWrite.push(generateMarkdown.projectTesting(data.Testing));
    toWrite.push(generateMarkdown.projectContact(data.Email, data.GitHub));
    toWrite.push(generateMarkdown.projectLicense(data.License, data.Author));

    toWrite.forEach((item) => {
        fs.appendFileSync(fileName, item, (err) => {
            if (err) throw err;
            // console.log('The "data to append" was appended to file!');
        });
    });
}

// function to initialize program
function init() {
    // inquirer.prompt(
    inquirer
        // pass questions
        .prompt(questions)
        // take in answers and write them to the readme file
        .then((answers) => {
            writeToFile("readme.md", answers);
        });
}

// function call to initialize program
init();
