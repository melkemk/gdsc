
const net = require('net')
let date = new Date()
const server = net.createServer(function (socket) {
    socket.write(`${date.getFullYear()}-${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}\n`)
    socket.end('')
}).listen(process.argv[2])  