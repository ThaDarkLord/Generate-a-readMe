// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please supply a description for your application:",
      name: "description",
    },
    {
      type: "input",
      message: "What will be included in your table of content?",
      name: "toc",
    },
    {
      type: "input",
      message: "How do you use this application?",
      name: "usage",
    },
    {
      type: "list",
      message: "What kind of license would you like to use? ",
      choices: ["MIT", "Apache 2.0", "Boost", "GNU", "none"],
      name: "license",
    },
    {
      type: "input",
      message: "How can others contribute to this project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Are there any tests for this application and if so, how are they ran?",
      name: "tests",
    },
    {
      type: "input",
      message: "Are there any follow up questions? ",
      name: "questions",
    },
  ])
  .then((name) => {
    // let { title, description, toc, usage, license, contribution, tests, questions } = name
    fs.writeFile("sREADME.md", genMarkdown(name), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });

// TODO: Create a function to initialize app
// function init() {}
// Array
// // Function call to initialize app
// init();
// console.log('Dog water');