const fs = require("fs")

function projectTitle(title) {
  let titleString = title;
  let generate = `# Project Title: ${titleString} \n`;
  return generate 
}

function projectAuthor(author) {
  let authorString = author;
  let generate = `## Author: ${authorString} \n`;
  return generate 
}

function projectContents() {
  let render = `
  ## Table of Contents: \n
  * [Description](#Description) \n
  * [Installation](#Installation) \n
  * [Usage](#Usage) \n
  * [Contributors](#Contributors) \n
  * [Testing](#Testing) \n
  * [Contact](#Contact) \n
  `;
  return render 
}

function projectDescription(description) {
  let descripString = description;
  let render = `## Description: \n ${descripString} \n`;
  return render 
}

function projectInstallation(installation) {
  let installString = installation;
  let render = `## Installation: \n ${installString} \n`;
  return render 
}

function projectUsage(usage) {
  let usageString = usage;
  let render = `## Usage: \n ${usageString} \n`;
  return render 
}

function projectContributors(contributors) {
  let contributeString = contributors;
  let render = `## Contributors: \n ${contributeString} \n`;
  return render 
}

function projectTesting(testing) {
  let testingString = testing;
  let render = `## Testing: \n ${testingString} \n`;
  return render 
}

function projectContact(email, git) {
  let emailString = email;
  let gitString = git;
  let render = `
  ## Contact: \n 
  * Email: ${emailString} \n 
  * GitHub Username: ${gitString} \n
  `;
  return render 
}

module.exports = {
  projectTitle: projectTitle,
  projectAuthor: projectAuthor,
  projectContents: projectContents,
  projectDescription: projectDescription,
  projectInstallation: projectInstallation,
  projectUsage: projectUsage,
  projectContributors: projectContributors,
  projectTesting: projectTesting,
  projectContact: projectContact,
  
}


// function projectContents(contents) {
//   let contentString = contents;
//   let render = `## ${contentString} \n`;
//   return render 
// }



// function to generate markdown for README
// function generateMarkdown(data) {
//   return `
//   # ${data.title}

//   ![License](https://img.shields.io/badge/License-${data.license}-lightgrey.svg)

//   ## Table of Contents

//   \n* [Description](#description)

// `;
// }

// module.exports = generateMarkdown;
