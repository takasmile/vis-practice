const mongoose = require('mongoose')
const Schema = mongoose.Schema
const configSchema = new Schema(
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
    collection: 'bassi'
  }
)
const collModel = mongoose.model('Bassi', configSchema)
module.exports = collModel