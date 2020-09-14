let contra = "*[Contributing](#contributing)"
const npm = "```npm i```"
// function to generate markdown for README\
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License Badge](https://img.shields.io/badge/License-${data.license}-blue) ![Code Badge](https://img.shields.io/badge/JavaScript-100%25-green)
  ## Description

  ## ${data.author}
      ###${data.description}

  ## Table of Contents
  
  *[Installation](#installastion)

  *[Usage](#usage)

  *[Tests](#tests)

  *[Questions](#questions)

  ${contra}

  ## Installation

  To install necessary dependencies, run the following command:
  
  ${npm}

  ## Usage

  

`;
}

// this is where the github api func

// make sure to use .then when gen api call info from github
module.exports = generateMarkdown;