const inquirer = require("inquirer");
const fs = require('fs');
const licenses = require('./licenses');

inquirer.prompt([
    // {
    //     type: 'input',
    //     message: 'What is the title of your project?',
    //     name: 'title'
    // },
    // {
    //     type: 'input',
    //     message: 'Tell me about the project:',
    //     name: 'description'
    // },
    // {
    //     type: 'input',
    //     message: 'What are the installation instructions?',
    //     name: 'installation instructions'
    // },
    // {
    //     type: 'input',
    //     message: 'What about usage information?',
    //     name: 'usage information'
    // },
    // {
    //     type: 'input',
    //     message: 'What are the contribution guidelines?',
    //     name: 'contribution guidelines'
    // },
    // {
    //     type: 'input',
    //     message: 'Any test instructions?',
    //     name: 'test instructions'
    // },
    {
        type: 'list',
        message: 'What kind of license would you like to use?',
        choices: ['MIT', 'Mozilla', 'Boost', 'GNU', 'Apache'],
        name: 'license'
    },
    // {
    //     type: 'input',
    //     message: 'What is your GitHub username?',
    //     name: 'github'
    // },
    // {
    //     type: 'input',
    //     message: 'And your email address?',
    //     name: 'email'
    // }
]).then((response)=> {
    let badge;
    switch (response.license) {
        case 'MIT':
            badge = licenses.licenseObj.mit.badge;
            break;
        case 'Mozilla':
            badge = licenses.licenseObj.mozilla.badge;
    }
    fs.writeFile('newREADME.md', badge, (err)=>
    err ? console.log(err) : console.log("You've created a new README file!"))
})