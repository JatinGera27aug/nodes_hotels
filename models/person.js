const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: {type: Number},
    work:{
        type: String, enum:['CYLINDER WALA', 'chutney wala' ,'Momos'],
        required:true,
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
        
    }
})

//Create Person Model
const Person = mongoose.model('Person', personSchema)
module.exports = Person;