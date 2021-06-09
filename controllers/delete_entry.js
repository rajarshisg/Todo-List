const Entry = require("../models/todo_entry") //adding the entry collection schema

module.exports = function(req, res){
    //finding the queried entry and deleting it
    Entry.findByIdAndDelete(req.query.id, function(err){
        if(err){
            console.log('Error in deleting task!');
        }
        //redirecting back
        return res.redirect('back');
    });
}