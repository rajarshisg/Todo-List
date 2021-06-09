const Entry = require("../models/todo_entry"); //adding the entry collection schema


module.exports = function(req, res){
    //creating a new entry
    Entry.create({
        description : req.body.description,
        due_date : req.body.due_date,
        category : req.body.category,
        completed : false
    }, function(err){
        if(err){
            console.log(`Error occured in creating entry!`);
        }
        //redirecting back
        return res.redirect('back');
    });
};