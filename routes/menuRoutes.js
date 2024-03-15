const express = require('express');
const router = express.Router(); // manage all  the routes of our application

const db = require('./../db');
const Menu = require('./../models/menu');


router.post('/', async (req, res) => {
    try{
        const newMENU_data = req.body;
        const newMENU = new Menu(newMENU_data);
        const savedMENU_response = await newMENU.save();
        console.log('data saved');
        // res.status[200].json(savedMENU_response);
        res.status(200).send(savedMENU_response);
    }
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'});
        res.status(500).send("Internal Server Error");
    }
})
router.get('/' ,async (req,res)=>{
    try{
    const data = await Menu.find();
    console.log(data);
    res.status(200).send(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'});
        res.status(500).send("Internal Server Error");
    }
})

// menu taste type
router.get('/:taste' ,async (req,res)=>{
    
    const Taste = req.params.taste;
    if(Taste == "spicy" || Taste == "sweet" || Taste=="sour"){
        const response = await Menu.find({taste:Taste});
        console.log("\nresponse fetched");
        response.forEach((document) => {
            console.log("Name:", document.name);
            // res.status(300).send(document.work);
            console.log("Price:", document.price);
        });
    
        console.log(response);
        res.status(300).send(response);
}
    else{
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})



module.exports = router;