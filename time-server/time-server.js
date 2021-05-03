"use strict";

const net = require("net")

let date = new Date()

let dd = date.getDate().toString().padStart(2, '0')
let mm = (date.getMonth() + 1).toString().padStart(2, '0')
let yyyy = date.getFullYear().toString().padStart(2, '0')
let time = date.toTimeString().substring(0, 5)


let dateString = `${yyyy}-${mm}-${dd} ${time}\n`

const server = net.createServer(function (socket) {
    socket.end(dateString)
})
server.listen(Number(process.argv[2]))
