const MongoClient = require('mongodb').MongoClient;
//include actual username and pasword 
const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority';
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
