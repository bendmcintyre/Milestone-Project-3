const express = require("express");
const router = express.Router();
const petController = require('./Controllers/petController');
// should require auth file to make sure user is logged
// prbably should add all api his from controller 


router.post('/test', (req, res) => {
    res.send('test worked post');
})

//Routes
//errors 
router.get('/pets', (req, res) =>{
    //get all pets
    const allPets = petController.getAllPets();
    return res.send(allPets);
});

router.get('/pet', (req, res) =>{
    //to get a specific pet
    //localhost:3000?id=123
    const allPets = petController.getAllPets();
    return res.send(allPets);
});

router.post('/pet', () => {
    //add a new pet
    //localhost:3000/?color=black&
    const body = request.body;
    db.add(body);
    
})

router.delete('/pet', (req,res) => {
    //localhost:3000/pet?id=123
    const params = req.params;
    const id  = params.id
    petController.deletePet(id);
});


router.get('/test', (req, res) => {
    const text = petController.someControllerFunction()
    res.send(text);
})

module.exports = router;