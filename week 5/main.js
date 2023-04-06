const express = require('express')
const morgan = require('morgan')
const app = express();
const parser = require('body-parser')
app.use(express.static('static'))
app.use(morgan('common'))
app.use(parser.urlencoded({ extended: true }))
app.post('/login', (req, res) => {
    res.send(` hey ${req.body.name}`)
})
app.listen(5000, () => console.log("listening on port 5000"))