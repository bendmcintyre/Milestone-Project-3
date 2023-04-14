const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

async function getAllPets() {
    const db = getDb();
    const allPets = await db.collection('pets').find().toArray();
    if (!allPets) {
      throw new Error('No pets found');
    }
    return allPets;
}
  
async function getPet(id) {
    const db = getDb();
    const pet = await db.collection('pets').findOne({ _id: new ObjectId(id) });
    if (!pet) {
      throw new Error('Pet not found');
    }
    return pet;
  }
  
async function deletePet(id) {
    const db = getDb();
    const result = await db.collection('pets').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new Error('Pet not found');
    }
    return true;
}
  

async function createPet(newPet) {
  const db = getDb();
  const result = await db.collection('pets').insertOne(newPet);
  return result.ops[0];
}

async function updatePet(id, updatedPet) {
  const db = getDb();
  const result = await db.collection('pets').updateOne(
    { _id: new ObjectId(id) },
    { $set: updatedPet }
  );
  if (result.modifiedCount > 0) {
    const pet = await getPet(id);
    return pet;
  } else {
    return null;
  }
}

module.exports = {
  getAllPets,
  getPet,
  createPet,
  updatePet,
  deletePet
};
