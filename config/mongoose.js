const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect('mongodb://localhost/todo_list_db'); //connecting to mongoose

const db = mongoose.connection;  //acquiring the connection

db.on('error', console.error.bind('Error in connectiong to MongoDB!')); //if error occured in connecting

//if connected
db.once('open', function(){
    console.log(`Succesfully connected to MongoDB!`);
});
