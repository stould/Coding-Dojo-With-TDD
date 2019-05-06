//------ main.js ------

var lib = require('./lib');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What do you wanna calculate ?', (inputString) => {
    readline.close();
});

