
const express = require('express')
const app = express()


const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))


app.post('*', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])



