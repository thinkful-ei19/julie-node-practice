'use strict';

const mongoose = require('mongoose');

const { TEST_MONGODB_URI } = require('../config');

before(function() {
  process.stdout.write('\x1Bc\n');
  return mongoose.connect(TEST_MONGODB_URI);
});

after(function() {
  return mongoose.disconnect();
});
