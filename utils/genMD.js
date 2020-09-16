// function to generate markdown for README\
function generateMarkdown(data) {

  //data pulled from index.js
  testText = data.test

  // strings to be placed withing .md
  const npm = "```npm i```"
  let test = "```" + testText + "```"

  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-blue) ![Code Badge](https://img.shields.io/badge/JavaScript-100%25-green)
  
  ## Description

  ${data.description}


---
  ## Table of Contents
  
  * [Installation](#installastion)

  * [Usage](#usage)

  * [Tests](#tests)

  * [Contributing](#contributing)

  * [Questions](#questions)


---
  ## Installation

  To install necessary dependencies, run the following command:
  
  ### ${npm}


---
  ## Usage
 
  Space created for your ${data.usage}


---  
  ## Tests

  ### ${test}


---  
  ## Contributing

  ${data.collab}

  
---  
  ## Questions
  
  If you have any questions about the project, open an issue or contact me directly through my [email](mailto:${data.email}).
  You can find more of my work at [Git Hub](https://github.com/${data.userName}).

`;
}

module.exports = generateMarkdown;