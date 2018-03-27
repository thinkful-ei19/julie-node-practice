'use strict';

const express = require('express');
const router = require('express').Router();

const todos = require('../db/seed/todos');
const mongoose = require('mongoose');
const ToDo = require('../models/models');

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

  const newToDo = {text, isDone};
  todos.push(newToDo); //always have to have id, text, isDone;
  res.json(newToDo);
});

router.put('/:id', (req, res, next) => {
  if (!text) {
    const err = new Error ('Missing `text` in request body');
    err.status = 400;
    return next(err);
  }
  const toUpdate = {text, isDone};
  
  ToDo.findByIdAndUpdate(id, toUpdate)
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

module.exports = router;