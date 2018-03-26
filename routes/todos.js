'use strict';

const router = require('express').Router();

const todos = require('../db/seed/todos');

router.get('/', function(req, res) {
  res.json(todos);
});

router.get('/:id', function(req, res) {
  const id = req.params.id;
  
  res.json(todos.find(todo => todo.id === id));
});

router.post('/', function(req, res, next) {
  const {text} = req.body;
  if (!text) {
    const err = new Error ('Missing `text` in request body');
    err.status = 400;
    return next(err);
  }

  const newToDo = {text, id:'00000000000002', isDone:false};
  todos.push(newToDo); //always have to have id, text, isDone;
  res.json(newToDo);
});

module.exports = router;