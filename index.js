const program = require('commander')
const inquirer = require('inquirer')
const askqustion = require('./question.js')
program.version('0.0.1');
program
  .command('startgame')
  .description('to start game')
  .action((source, destination) => {
    askqustion()
  });
program.parse(process.argv);
