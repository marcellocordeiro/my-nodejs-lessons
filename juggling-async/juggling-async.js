"use strict";

if (process.argv.length < 3) {
    process.exit(1)
}

const http = require('http');

let finishedCount = 0
let dataArray = []

function httpGet(offset) {
    http.get(process.argv[2 + offset], function (response) {
        response.setEncoding('utf-8')

        response.on('data', (chunk) => { dataArray[offset] += chunk })
        response.on('end', () => {
            finishedCount += 1

            if (finishedCount === 3) {
                for (let index = 0; index < 3; index++) {
                    console.log(dataArray[index])
                }
            }
        })
        response.on('error', console.error)
    })
}

for (let index = 0; index < 3; index++) {
    dataArray[index] = ''
    httpGet(index)
}
