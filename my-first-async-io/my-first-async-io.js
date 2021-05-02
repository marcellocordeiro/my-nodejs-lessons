"use strict";

if (process.argv.length < 3) {
    process.exit(1)
}

const fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', function (err, contents) {
    if (err) {
        return console.log(err)
    }

    let lineBreakCount = contents.split('\n').length - 1
    console.log(lineBreakCount)
})
