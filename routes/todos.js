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

router.post('/', function(req, res) {
  const {text} = req.body;
  

});

module.exports = router;