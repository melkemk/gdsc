const express = require('express')
const app = express()
app.set('views', (process.argv[3] || path.join(__dirname, 'templates')))
app.set('view engine', 'pug')
app.get('/home', (req, res) => {
    res.render('index', { date: new Date().toDateString() })
})
app.listen(process.argv[2])