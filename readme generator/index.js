const inquirer = require('inquirer');
const fs = require('fs');

var MIT = '';
var Apache = '';
var GNU = '';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the title you want for your readme: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe the project: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How can your code be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter any test instructions: ',
      name: 'test',
    },
    {
      type: 'input',
      message: 'ask how poeple can contribute: ',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What is your email? ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your Github Username? ',
      name: 'username',
    },
    {
      type: 'list',
      message: 'What is your license? ',
      name: 'license',
      choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0']
    },
  ])
  .then((data) => {
    const README = 
    `# ${data.title}

## Table of Contents

[Description](#Description)<br>
[Installation](#Installation-Instructions)<br>
[Usage Information](#Usage-Information)<br>
[Test Instructions](#Test-Instructions)<br>
[Contribution](#Contribution)<br>
[License](#License)<br>
[Questions](#Questions)

## Description

<p>${data.description}</p> 

## Installation

<p>${data.installation}</p> 

## Usage Information

<p>${data.usage}</p> 

## Test Instructions

<p>${data.test}</p> 

## Contribution

<p>${data.contribution}</p> 

## License

<p>${data.license}</p>

## Questions

[<p>Github Account</p>](https://github.com/${data.username})
<p>${data.email}</p>


`;

    fs.writeFileSync('README.md', README, (err) =>
    err ? console.log(err) : console.log('Success!')
  );

    
  });