"use strict";

const fs = require('fs')

module.exports = function ls(directory, extension, callback) {
    fs.readdir(directory, function (err, contents) {
        if (err) {
            return callback(err)
        }

        let filteredFiles = contents.filter((fileName) => {
            return fileName.endsWith('.' + extension)
        })

        // or...
        // const path = require('path')
        // let filteredFiles = contents.filter((fileName) => {
        //     return path.extname(fileName) == extension
        // })

        callback(null, filteredFiles)
    })
}

// or...
// module.exports = { ls };
