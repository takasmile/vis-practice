'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const cors = require('cors');
const bodyParser = require('body-parser');

const collModel = require('./mongoose.config')

mongoose.connect(
  'mongodb://localhost:27017/chinavis',
  {useNewUrlParser: true, useCreateIndex: true,}
);

mongoose.connection.on('connected', () => { console.log('connection success') });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.get('/api/origin-data', (req, res) => {
  collModel
    .find({})
    .limit(100)
    .exec((err, data) => {
      if (err) return res.status(404).send('Error while getting notes!');
      return res.send({data});
    });
});

const PORT = 5000;
app.listen(PORT);
console.log('api running on port ' + PORT + ': ');