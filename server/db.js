const MongoClient = require('mongodb').MongoClient;
//should add this part to env - and replace it with something like -->

/*
const mongoose = require('mongoose')
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
*/
const uri = 'mongodb+srv://samadafzal:<samadafzal1>@cluster0.vawp0yd.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true });

let _db;

//test runs to see if db is connected?
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
