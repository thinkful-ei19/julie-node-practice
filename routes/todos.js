'use strict';

const express = require('express');
const router = express.Router();

const todos = require('../db/seed/todos');
const mongoose = require('mongoose');
const Todo = require('../models/models');

router.get('/', function(req, res) {
  Todo.find()
    .then(results => {
      res.json(results);
    });
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

  const newToDo = {text};
  Todo.create(newToDo)
    .then(result => {
      res.sendStatus(204);
    });

});

router.put('/:id', (req, res, next) => {
  const {text, isDone} = req.body;
  const {id} = req.params;
  if (!text) {
    const err = new Error ('Missing `text` in request body');
    err.status = 400;
    return next(err);
  }

  const toUpdate = { text, isDone };
  const options = { new : true };
  ToDo.findByIdAndUpdate(req.params.id, toUpdate, options)
    .then(result => {
      if(result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  ToDo.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;