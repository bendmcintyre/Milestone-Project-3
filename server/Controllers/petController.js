const { MongoClient } = require('mongodb');
//add actual mongo URL in line 4 and DB name in line 5
async function getAllPets() {
  const client = await MongoClient.connect('-');
  const db = client.db('-');
  const pets = await db.collection('pets').find({}).toArray();
  client.close();
  return pets;
}



module.exports={
    getAllPets,
    someControllerFunction,
    deletePet
}