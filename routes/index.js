const express = require('express'); //requiring express
const router = express.Router(); //used to create modular route handlers
const indexController = require('../controllers/index_controller'); //including the controller for the app

router.get('/', indexController); //for a request to '/' route we load the index_controller controller to handle the request

module.exports = router;