const mongoose = require('mongoose')

let contactSchema = new mongoose.Schema({
    id: { type: String, default: '', required: true },
    name: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    subject: { type: String, default: '', required: true },
    message: { type: String, default: '' }
})
  
module.exports = mongoose.model('Contact', contactSchema)