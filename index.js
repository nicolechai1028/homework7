const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type:"input",
        name: "github",
        message: "GitHub Username:",
    },
    {
        type:"input",
        name: "email",
        message: "GitHub Email:",
    },
    {
        type:"input",
        name: "URL",
        message: "Project URL:",
    },
    {
        type:"input",
        name: "name",
        message: "Project Name:",
    },
    {
        type:"input",
        name: "description",
        message: "Project Short Description:",
    },
    {
        type:"input",
        name: "installation",
        message: "Command to install dependencies:",
        default: "npm install",
    },
    {
        type:"input",
        name: "usage",
        message: "What does the user need to know in regards to using this repository?",
    },
    {
        type:"list",
        name: "license",
        message: "Select a license:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type:"input",
        name: "contributing",
        message: "What does user need to know in regards to contributing to the repository?"
    },
    {
        type:"input",
        name: "github",
        message: "GitHub Username:"
    },
    {
        type:"input",
        name: "test",
        message: "Command to test:",
        default: "npm test",
    },
];

function writeToFile(fileName, data) {
    return false.writeFileSync(path.join(process.cwd(), fieName), data);
}

function init() {
    inquirer.prompt(questions).then((inquireResponses) => {
        writeToFile("README.md", generateMarkdown({...inquireResponses}));
    })
}

init(); 