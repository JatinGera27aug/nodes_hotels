const express = require('express');
const router = express.Router(); // manage all  the routes of our application

const db = require('./../db');
const Person = require('./../models/person');

router.post('/', async (req, res) => {
    try{
        const newPerson_data = req.body;
        const newPerson = new Person(newPerson_data);
        const savedPerson_response = await newPerson.save()
        console.log('data saved');
        // res.status[200].json(savedPerson_response);
    }
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})

router.get('/',async (req,res)=>{
    try{
    const data = await Person.find();
    console.log(data);
    res.status(200).send(data);
    // res.status[200].json(data);
}
    catch(err){
        console.log(err);
        // res.status[500].json({error: 'Internal Server Error'})
    }
})
// parametrized request
router.get("/:workType", async (req,res)=>{
    const workType = req.params.workType;
    if(workType == "CYLINDER WALA" || workType == "chutney wala" || workType=="Momos"){
        const response = await Person.find({work:workType});
        console.log("\nresponse fetched");
        response.forEach((document) => {
            console.log("Work:", document.work);
            // res.status(300).send(document.work);
            console.log("Name:", document.name);
        });
        console.log(response);
        res.status(300).send(response);
        // res.status(200).json(response);
    }
    else{
        // res.status[400].json({error: "Invalid Work Type"});
        res.status(400).send("invalid work type");
    }
})

router.put("/:id", async (req,res)=>{
    try{
        const personID = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personID, updatePersonData, {
            new  : true, // update hone ke bad ka data hi milega
            runValidators:true // run mongoose validation
        })

        if(!response){ // id not present
            return res.status(404).send('No record found with given details');
        }

        console.log("data updated");
        console.log(response);
        res.status(200).send(response);

    }
    catch(err){ // update hua nhi
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const personID = req.params.id;

        const response =  await Person.findByIdAndDelete(personID);
        if (!response) {
            console.log("can't find user");
            res.status(404).send("no user found with given attributes");
        }
        console.log("deleted");
        res.status(200).send("user deleted");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;