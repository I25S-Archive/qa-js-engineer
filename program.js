const assert = require('assert')

const left = parseInt(process.argv[2]);
const right = parseInt(process.argv[3]);

assert(left + right === 100, 'Sum of arguments is not equal to 100')

console.log(`Starting execution of left arg: ${left}`)
setTimeout(() => {
    console.log(`Executed left arg: ${left}`)

    console.log(`Starting execution of right arg: ${right}`)
    setTimeout(() => {
        console.log(`Executed right arg: ${right}`)
    }, right * 100);
}, left * 10);