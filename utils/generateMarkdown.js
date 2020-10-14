// const fs = require("fs")

function projectTitle(title) {
  let titleString = title;
  let generate = `# 💡 Project Title: ${titleString} \n`;
  return generate
}

function projectBadge(badge) {
  if (badge === "MIT License") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow) \n`;
  }
  if (badge === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen) \n`;
  }
  if (badge === "Mozilla Public License 2.0") {
    return `![License](https://img.shields.io/badge/License-MPL_2.0-blue) \n`
  }
}

function projectAuthor(author) {
  let authorString = author;
  let generate = `## 👤 Author: ${authorString} \n`;
  return generate
}

function projectContents() {
  let render = `
  ## 📜 Table of Contents: \n
  * [Description](#Description) \n
  * [Installation](#Installation) \n
  * [Usage](#Usage) \n
  * [Contributors](#Contributors) \n
  * [Testing](#Testing) \n
  * [Contact](#Contact) \n
  * [License](#License) \n
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
  * 💌 Email: ${emailString} \n 
  * 👤 GitHub Username: ${gitString} \n
  `;
  return render
}

function projectLicense(license) {
  if (license === "MIT License") {
    return `## License: \n 
    This project is licensed under the MIT License \n
 `
  }

  if (license === "Apache License 2.0") {
    return `## License: \n
    This project is licensed under the Apache License 2.0 \n
    `
  }

  if (license === "Mozilla Public License 2.0") {
    return `## License: \n
    This project is licensed under the Mozilla Public License 2.0 \n
    `
  }
}

module.exports = {
  projectTitle: projectTitle,
  projectBadge: projectBadge,
  projectAuthor: projectAuthor,
  projectContents: projectContents,
  projectDescription: projectDescription,
  projectInstallation: projectInstallation,
  projectUsage: projectUsage,
  projectContributors: projectContributors,
  projectTesting: projectTesting,
  projectContact: projectContact,
  projectLicense: projectLicense,
}
