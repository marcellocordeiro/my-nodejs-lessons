"use strict";

const mymodule = require('./mymodule')

if (process.argv.length < 4) {
    process.exit(1)
}

let directory = process.argv[2]
let extension = process.argv[3]

mymodule(directory, extension, function (err, files) {
    if (err) return console.log(err)

    files.forEach((file) => console.log(file))
})
