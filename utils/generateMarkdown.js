const fs = require("fs")

function projectTitle(title) {
  let titleString = title;
  let generate = `# ${titleString} \n`;
  return generate 
}

function projectDescription(description) {
  let descripString = description;
  let render = `## ${descripString} \n`;
  return render 
}

module.exports = {
  projectTitle: projectTitle,
  projectDescription: projectDescription,
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
