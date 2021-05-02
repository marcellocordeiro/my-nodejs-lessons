"use strict";

if (process.argv.length < 3) {
    process.exit(1)
}

const http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf-8')

    response.on('data', console.log)
    response.on('error', console.error)
})
