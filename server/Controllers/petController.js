function getAllPets() {
    //hit the database here and get ALL the pets and return them
    const allPets = db.get('pets');
    return allPets;
}
function someControllerFunction(id) {
    return "from the controller"
}
function deletePet(id) {
    //hit the db and delete the pet with that id
}

module.exports={
    getAllPets,
    someControllerFunction,
    deletePet
}