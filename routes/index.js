const express = require('express'); //requiring express
const router = express.Router(); //used to create modular route handlers
const indexController = require('../controllers/index_controller'); //including the controller for the app
const entryController = require('../controllers/create_entry'); //controller to create an entry
const deleteController = require('../controllers/delete_entry'); //controller to permanently delete entry
const completedController = require('../controllers/completed_task'); //controller for displaying completed tasks
const markcompletedController = require('../controllers/mark_completed'); //controller to mark the tasks completed

router.get('/', indexController); //for a request to '/' route we load the index_controller controller to handle the request
router.post('/create-entry', entryController); // '/create-entry' route to add an entry
router.get('/delete-entry', deleteController); // 'delete-entry' route to delete an entry
router.get('/completed-tasks', completedController); // 'completed-tasks' route to display completed tasks
router.get('/mark-completed', markcompletedController); // 'mark-completed' route to mark a task as completed
module.exports = router;