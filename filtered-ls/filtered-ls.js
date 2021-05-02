"use strict";

if (process.argv.length < 4) {
    process.exit(1)
}

const fs = require('fs')

let directory = process.argv[2]
let extension = '.' + process.argv[3]

fs.readdir(directory, function (err, contents) {
    if (err) {
        return console.log(err)
    }

    let filteredFiles = contents.filter((fileName) => {
        return fileName.endsWith(extension)
    })

    // or...
    // const path = require('path')
    // let filteredFiles = contents.filter((fileName) => {
    //     return path.extname(fileName) == extension
    // })

    filteredFiles.forEach((file) => { console.log(file) })
})
