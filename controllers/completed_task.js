const Entry = require("../models/todo_entry"); //adding the entry collection schema

module.exports = function(req, res){
    //fetching the completed tasks
    Entry.find({
        completed: true
    }, function(err, entry){
        if(err){
            console.log('Error in fetching data from database!');
        }
        return res.render('home', {
            //sending all the entries and current page demarcation to ejs
            tasks : entry,
            curr_url : 'not-home'
        });
    });
}