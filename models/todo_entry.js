const mongoose = require('mongoose'); //requiring mongooose

/*The Schema for entry in the todo list app has the following fields :
    1. description - Description about the task
    2. due_date - Due date of the task
    3. category - Category of the task, (Word, Personal, School etc.)
    4. completed - Task is completed or not
*/

const entrySchema = mongoose.Schema({
    description : {
        type : String,
        required : true
    },

    due_date : {
        type : Date,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    completed : {
        type : Boolean,
        required : true
    }
});

const Entry = mongoose.model('Entry', entrySchema); //creating a collection named Entry from the Schema
module.exports = Entry; //exporting the schema