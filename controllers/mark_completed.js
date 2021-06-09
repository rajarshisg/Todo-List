const Entry = require("../models/todo_entry") //adding the entry collection schema

module.exports = function(req, res){
    //fetching the queried task and updating it to completed
    Entry.findByIdAndUpdate(req.query.id,{
       completed: true
    }, function(err){
        if(err){
            console.log('Error in deleting task!');
        }
        //redirecting back
        return res.redirect('back');
    });
}