const { ObjectId } = require('mongodb');
const db = require('../Models');

async function getAllPets() {
    const allPets = await db.pet.find();
    if (!allPets) {
      throw new Error('No pets found');
    }
    return allPets;
}
  
async function getPet(id) {

    const pet = await db.pet.findOne({ _id: new ObjectId(id) });
    if (!pet) {
      throw new Error('Pet not found');
    }
    return pet;
  }
  
async function deletePet(id) {

    const result = await db.pet.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new Error('Pet not found');
    }
    return true;
}
  
async function createPet(newPet) {

  const result = await db.pet.insertOne(newPet);
  return result.ops[0];
}

async function updatePet(id, updatedPet) {

  const result = await db.pet.updateOne(
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
