'use strict';

const mongoose = require('mongoose');

const { TEST_MONGODB_URI } = require('../config');

before(function() {
  // set the environment variable to test
  // to suppress unwanted logging
  process.env.NODE_ENV = 'test';
  // clear the console between runs
  process.stdout.write('\x1Bc\n');

  return mongoose.connect(TEST_MONGODB_URI);
});

after(function() {
  return mongoose.disconnect();
});
