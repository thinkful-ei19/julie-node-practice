'use strict';

const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  text: {type: String, required: true},
  isDone: {type: Boolean, default: false}
});

module.export = mongoose.model('ToDo', toDoSchema);