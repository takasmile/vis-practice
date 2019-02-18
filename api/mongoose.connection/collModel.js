const mongoose = require('mongoose');

const db = require('./connect.js');
const {collName} = require("./config")

const collSchema = new mongoose.Schema(
  {
    'Subject' : String,
    'From (display)' : String,
    'From (address)' : String,
    'To (display)' : String,
    'To (address)' : String,
    'Cc (display)' : String,
    'Cc (address)' : String,
    'Bcc (display)' : String,
    'Bcc (address)' : String,
    'Creator Name' : String,
    'Importance' : Number,
    'Date Sent' : String,
    'Date Received' : String,
    'Size' : Number,
    'Attachment Names' : String
  },
  {
    collection: collName
  });
let collModel = db.model('bassi', collSchema);
module.exports = collModel