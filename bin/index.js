#!/usr/bin/env node

const fs = require('fs')
let cmd = require('commander')
let appInfo = require('../package.json')
// let path = process.cwd()

// function app(obj) {
//     if (obj[0] == '-v' || obj[0] == '--version') {
//         console.log('nn version is ' + appInfo.version);
//     }
// }
// app(process.argv.slice(2))

cmd
    .version(appInfo.version)
    .option("-i, --index [n]", 'ascii art index, default is random', -1, parseInt)
    .parse(process.argv);

var path = require('path');

var animals = fs.readFileSync(path.join(__dirname, '../data/animals.txt')).toString()
    .split('===========++SEPERATOR++===========\r\n');



// 返回一个随机的动物ascii
function randomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
}
var animal = cmd._optionValues.index === true ? randomAnimal() : animals[cmd._optionValues.index];

console.log(animal)