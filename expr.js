const express = require('express');
app = express();
// const json=require('json');   
const db = require('./db');
const Person = require('./models/person');
const Menu = require('./models/menu');


const bodyParser = require('body-parser');
app.use(bodyParser.json());            // middleware for parsing json data

app.get('/',(req,res)=>{    // get mei data back to front
    res.send("WElcome here sir")
    console.log("hi");
})

// app.get('/idli',(req,res)=>{
//     res.send("here is your idli sambhar order")
// })

app.get('/idli',(req,res)=>{
    var idli_customized={
        name:'rava idli',age:12,is_sambhar:true
    }
    res.send(idli_customized)
})

app.post('/items',(req,res)=>{
    console.log('post method called')  // front to back, data received by backend server
    console.log(req.body);             // req.body contains the data sent from client
}) 

// app.post('/person',(req,res)=>{
//     const newPerson_data = req.body // is req.body mein data aayega jo ham enter krenge
//     // aur ye pehle pass hoga body parser mein taki wo object ki form mein data mile

//     // either write each field OR BELOW these
//     // const newPerson = new Person();
//     // newPerson.name = newPerson_data.name;
//     // newPerson.mobile=newPerson_data.mobile;
//     // newPerson.age=newPerson_data.age;

//     // ALTERNATE AND BETTER WAY
//     //  const newPerson = Person.build(newPerson_data);  
//     const newPerson = new Person(newPerson_data);

//     //save the new person to dbs
//     newPerson.save((error, savedPerson)=>{
//         if(error){
//             console.log('Error saving person:', error);
//             return res.status(500).json({error:'Internal Server error'})
//             // whenver a connection happens, server sends signal known as status
//         }
//         else{
//             console.log("data saved successfully");
//             res.status[200].json(savedPerson);
//         }
//     })

// })

// --- NICHE WALA CHLA GYA ROUTES MEIN
// app.post('/person', async (req, res) => {
//     try{
//         const newPerson_data = req.body;
//         const newPerson = new Person(newPerson_data);
//         const savedPerson_response = await newPerson.save()
//         console.log('data saved');
//         // res.status[200].json(savedPerson_response);
//     }
//     catch(err){
//         console.log(err);
//         // res.status[500].json({error: 'Internal Server Error'})
//     }
// })
// app.get('/person' ,async (req,res)=>{
//     try{
//     const data = await Person.find();
//     console.log(data);
//     // res.status[200].json(data);
// }
//     catch(err){
//         console.log(err);
//         // res.status[500].json({error: 'Internal Server Error'})
//     }
// })


// ? import router file
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
// user router files
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(4000, ()=>{
    console.log('server is live');
})