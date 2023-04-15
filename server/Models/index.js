//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://samadafzal:samadafzal1@cluster0.vawp0yd.mongodb.net/adoption', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
//should add this part to env - and replace it with something like -->

/*

console.log(process.env.MONGO_URI)

*/
const uri = 'mongodb+srv://samadafzal:samadafzal1@cluster0.vawp0yd.mongodb.net/pets';
//const client = new MongoClient(uri, { useNewUrlParser: true });

let _db;

/*
test runs to see if db is connected?
const connectDb = (callback) => {
  client.connect((err, db) => {
    if (err) {
      return callback(err);
    }
    _db = db.db('test');
    console.log('Successfully connected to MongoDB server');
    return callback(null);
  });
};

const getDb = () => {
  if (!_db) {
    throw new Error('Database not connected');
  }
  return _db;
};

module.exports = {
  connectDb,
  getDb,
};

*/
module.exports.contactForm = require('./contactForm')
module.exports.pet = require('./pet')