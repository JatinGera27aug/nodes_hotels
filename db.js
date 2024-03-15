const mongoose = require('mongoose');

const mongourl = "mongodb://127.0.0.1/hotel"; // replace after 7/ with your dbs name


// setting up connection
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('connected',()=>{       // db event listen krega yha
    console.log("Mongodb connected");
})

db.on("error", (err) => console.log(`Error connecting to database:`))

db.on("disconnected",()=>{      
    console.log("Mongodb dis-connected");
})

// export dbs connection
module.exports = db;