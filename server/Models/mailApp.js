const mongoose = require('mongoose')

let contactSchema = new mongoose.Schema({
    from: { type: String, default: '', required: true },
    to: { type: String, default: '', required: true },
    subject: { type: String, default: '', required: true },
    body: { type: String, default: '' }
})
  
module.exports = mongoose.model('Contact', contactSchema)