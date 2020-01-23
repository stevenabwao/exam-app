const path = require('path');
const http = require('http');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));


app.listen(port, () => {
    console.log('Server is running on port'+port);
});