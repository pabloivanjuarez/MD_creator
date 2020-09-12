// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## author ${data.author}
##

`;
}

// this is where the github api func

// make sure to use .then when gen api call info from github
module.exports = generateMarkdown;