const inquirer = require("inquirer");
const fs = require('fs');

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
    const title = response.title.split(" ").join("-");
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
    err ? console.log(err) : console.log("You've created a new README file!"))
});