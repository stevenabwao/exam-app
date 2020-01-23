const express = require('express');
const app = express()

const resultRoutes = require('./api/routes/results')


app.use('/results', resultRoutes)
module.exports = app