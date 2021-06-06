const express = require('express'); //requiring express
const port = 8000; //port on which our server runs

const path = require('path'); //requires the path library, needed for path.join()
const db = require('./config/mongoose'); //setting up mongoose odm


const app = express(); //app has all the functionalities of express

app.use('/', require('./routes/index')); //using express router to route requests seperately

app.set('view engine', 'ejs'); //setting up the view engine to EJS
app.set('views', path.join(__dirname,'views')); //providing the path for our views

//server listens for requests on port 8000
app.listen(port, function(err){
    if(err){
        //if any error occures on firing up the server
        console.log(`Error ${err} occured in running the server!`);
        return;
    }
    //if no error occured
    console.log(`Server is up and running on port ${port}!`);
});