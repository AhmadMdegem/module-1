// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/peopleDB', { useNewUrlParser: true })
app.use(express.json())

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})