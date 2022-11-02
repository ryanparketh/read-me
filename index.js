// const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'what is the project title?',
    },
    {
        type: 'input', 
        name: 'description',
        message: 'give a description',
    },
    {
        type: 'input', 
        name: 'email',
        message: 'what is your email?',
    },
    {
        type: 'input', 
        name: 'github',
        message: 'what is your github?',
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'what is the install commands of your project?',
    },
    {
        type: 'input', 
        name: 'test',
        message: 'how to test your project',
    },
    {
        type: 'input', 
        name: 'contributing',
        message: 'how to contribute to your project',
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'how to use the app',
    },
    {
        type: 'list', 
        name: 'licence',
        message: 'which of the licences would you like to use?',
        choices:['none', 'BSD 3', 'MIT']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponses) => {
        console.log('User Responses = ', userResponses);
        writeToFile('README.md', generateMarkdown({ ...userResponses }));
      });
}

// Function call to initialize app
init();