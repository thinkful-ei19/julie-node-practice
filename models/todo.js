'use strict';

const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  text: {type: String, required: true},
  isDone: {type: Boolean, default: false}
});

toDoSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Todo', toDoSchema);