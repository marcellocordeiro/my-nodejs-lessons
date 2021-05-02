"use strict";

if (process.argv.length < 3) {
    process.exit(1)
}

const fs = require('fs')

let contents = fs.readFileSync(process.argv[2], 'utf-8')
let lineBreakCount = contents.split('\n').length - 1

console.log(lineBreakCount)
