const inquirer = require('./node_modules/inquirer');
const fs = require('fs')
const genMD = require("./utils/genMD");
const {
  verify
} = require('crypto');

function verInput(name) {
  if (name === '') {
    return "Answer thy question, or perish!";
  }
  return true;
}

// array of questions for user
const questions = [{
    type: "input",
    message: "What is thy name?",
    name: "author",
    validate: verInput

  },
  {
    type: "input",
    message: "What is thy project name?",
    name: "title",
    validate: verInput
  }, {
    type: "input",
    message: "what is thy Github Username?",
    name: "username",
    validate: verInput
  }, {
    type: "input",
    message: "Thou have collaborators? Thou shall type thy collaborators names, if so.",
    name: "collab"
  }, {
    type: "input",
    message: "How would thou describe thy project?",
    name: "description",
    validate: verInput
  }, {
    type: "input",
    message: "What command should be run in order to install thy dependencies?",
    name: "installation",
    default: "npm install",
    validate: verInput
  }, {
    type: "list",
    message: "Which license will thy use?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
  }
];


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