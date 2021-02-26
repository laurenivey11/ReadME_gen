const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your project name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please discribe your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command will install dependencies?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command will run tests?'
        },
        {
            type: 'input',
            name: 'user',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'type',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ])
};
    promptUser()
    .then(promptUser => {
            const pageREADME = generatePage(promptUser);

            fs.writeFile('./README.md', pageREADME, err => {
                if (err) throw err;
                console.log('Page created! Check out README.md in this directory to see it!');
            });
        });
    