const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '5mb'}));

app.use(express.static(path.join(__dirname, '../')));


module.exports = app;