// function to generate markdown for README\
function generateMarkdown(data) {
  //
  const npm = "```npm i```"
  testText = data.test
  let test = "```" + testText + "```"
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-blue) ![Code Badge](https://img.shields.io/badge/JavaScript-100%25-green)
  ## Description

  ## ${data.author}
      ###${data.description}

  ## Table of Contents
  
  * [Installation](#installastion)

  * [Usage](#usage)

  * [Tests](#tests)

  * [Contributing](#contributing)

  * [Questions](#questions)


  ## Installation

  To install necessary dependencies, run the following command:
  
  ${npm}

  ## Usage
 
  //where pics gifs go for the usage

  ## Tests

  ${test}

  ## Contributing

  ## Questions

`;
}

// this is where the github api func

// make sure to use .then when gen api call info from github
module.exports = generateMarkdown;