const mongoose = require('mongoose'); //requiring mongoose
mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind('Error in connectiong to MongoDB!'));

db.once('open', function(){
    console.log(`Succesfully connected to MongoDB!`);
});
