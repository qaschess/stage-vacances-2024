// HINT: You can read https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/

import {  readFileSync } from "fs";

//import source from './source.json';

const source = readFileSync('./source.json',{ encoding: 'utf8', flag: 'r' })

const messageParse = JSON.parse(source);

// console.log(messageParse.messages[0].location)

let count = 0

for (const message of messageParse.messages) {
    if ( message.location.startsWith('JOURNEY/')) {
        count = count + 1
    }
}

console.log(count);
//console.log(source);
