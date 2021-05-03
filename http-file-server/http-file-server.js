"use strict";

const http = require('http')
const fs = require('fs')

let port = Number(process.argv[2])
let file = process.argv[3]

const server = http.createServer(function (req, res) {
    let fileStream = fs.createReadStream(file)

    fileStream.on('open', function () { fileStream.pipe(res) })
})
server.listen(port)
