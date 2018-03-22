'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const mongoose = require('mongoose');

const {TEST_MONGODB_URI} = require('../config');

const expect = chai.expect;
chai.use(chaiHttp);

before(function () {
  return mongoose.connect(TEST_MONGODB_URI);
});

after(function () {
  return mongoose.disconnect();
});