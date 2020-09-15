const inquirer = require('./node_modules/inquirer');
const fs = require('fs')
const genMD = require("./utils/genMD")


// array of questions for user
const questions = [{
  type: "input",
  message: "What is thy name?",
  name: "author",
  validate: function validateName(name) {
    console.log("/n Please enter thy name to continue...");
    return name !== "";
  }
}, {
  type: "input",
  message: "What is thy project name?",
  name: "title",
}, {
  type: "input",
  message: "what is thy Github Username?",
  name: "username"
}, {
  type: "input",
  message: "How would thou describe thy project?",
  name: "description"
}, {
  type: "input",
  message: "What command should be run in order to install thy dependencies?",
  name: "installation",
  default: "npm install"
}, {
  type: "list",
  message: "Which license will thy use?",
  name: "license",
  choices: ["none", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
}, {
  type: "input",
  message: "Thou have collaborators? Thou shall type thy collaborators names, if so.",
  name: "collab"
}];


// function to write README file
function writeToFile(fileName, data) {

  return fs.writeFileSync(`${fileName}` + ".md", data)
}

// function to initialize program
async function init() {
  let answ = await inquirer.prompt(questions)
  let printer = genMD(answ)
  writeToFile(answ.title, printer)
  console.log(answ);
  console.log(printer);
}

// function call to initialize program
init();