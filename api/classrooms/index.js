/*
  router sẽ mapping giữa url với controller 
*/

const express = require('express');
const router = express.Router();

const classroomController = require('./classroomController');

/* List all classes  */
router.get('/', classroomController.list);

/* Classroom detail */
router.get('/:id', classroomController.detail);

/* Add a new class */
router.post('/', classroomController.create);

module.exports = router;
