//------ main.js ------

import * as lib from './lib';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What do you wanna calculate ? ', (inputString) => {
    console.log('lol => ' + inputString);
    readline.close();
});