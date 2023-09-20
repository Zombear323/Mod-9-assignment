const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your discription?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is your test instructions?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your contribution?',
      name: 'contribution',
    },
    {
      type: 'list',
      message: 'What is your license?',
      name: 'license',
      choices: ['c1', 'c2', 'c3']
    },
  ])
  .then((data) => {
    const README = `${data.title} ${data.description} ${data.installation} ${data.usage} ${data.test} ${data.contribution} ${data.license}.`;

    fs.writeFile('README.md', JSON.stringify(README), (err) =>
      err ? console.log(err) : console.log('Success!')
    );

    
  });