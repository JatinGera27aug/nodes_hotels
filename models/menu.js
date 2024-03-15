const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true ,unique:true},
    price:{
        type:Number,
        required: true,
        default: 2,
    },
    taste:{
        type:String,
        enum:['sweet','sour','spicy']
    },
    is_drinkable:{
        type:Boolean,
        default: false,
    },
    ingredient:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,
    },
})

//Create Person Model
const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu;