"use strict";

if (process.argv.length < 3) {
    process.exit(1)
}

const http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf-8')

    let data = ''

    response.on('data', (chunk) => { data += chunk })
    response.on('end', () => {
        console.log(data.length)
        console.log(data)
    })
    response.on('error', console.error)
})
