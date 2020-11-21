// Declaring variables for the imported files I will be using to create the README file
const inquirer = require("inquirer");
const fs = require('fs');

// The questions a user will answer
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Tell me about the project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'What about usage information?',
        name: 'usageInformation'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributionGuidelines'
    },
    {
        type: 'input',
        message: 'Any test instructions?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'What kind of license would you like to use?',
        choices: ['MIT', 'Mozilla', 'Boost', 'GNU', 'Apache'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'And your email address?',
        name: 'email'
    }
]).then((response)=> {

    // Takes the title of the user's project and puts dashes in place of any spaces to be used in the README file name
    const title = response.title.split(" ").join("-");

    // Where the file gets created using the information from the user
    fs.writeFile(`${title}-README.md`, `# ${response.title}

![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)
    
## Description
    
${response.description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
    
${response.installationInstructions}
    
## Usage
    
${response.usageInstructions}
    
## License
    
This application is covered under the ${response.license} license.
    
## Contributing
    
${response.contributionGuidelines}
    
## Tests
    
${response.testInstructions}
    
## Questions
    
My GitHub profile is located at:
https://github.com/${response.github}
    
For any questions, please email me at:
${response.email}`, (err)=>

    // If there is an error at any point in the process, it will be printed to the console/terminal, otherwise a success message will be printed
    err ? console.log(err) : console.log("You've created a new README file!"))
});