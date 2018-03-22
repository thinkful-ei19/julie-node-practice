/* eslint-disable no-unused-expressions */
'use strict';

const app = require('../');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const todos = require('../db/seed/todos');

describe('Todo app', function() {
  describe('GET `/api/todos`', function() {
    it('should get a list of Todos', function() {
      return chai
        .request(app)
        .get('/api/todos')
        .then(function(res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(todos.length);
        });
    });
  });

  describe('GET `/api/todos/:id`', function() {
    it('should get a single todo', function() {
      const testId = '00000000000000';
      return chai
        .request(app)
        .get(`/api/todos/${testId}`)
        .then(function(res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.keys(['id', 'isDone', 'text']);
        });
    });
  });

  describe('POST `/api/todos/`', function() {
    it('should create a new todo', function() {
      expect(true).to.be.false;
    });
  });

  describe('PUT `/api/todos/`', function() {
    it('should update an existing todo', function() {
      expect(true).to.be.false;
    });
  });

  describe('PUT `/api/todos/`', function() {
    it('should delete an existing todo', function() {
      expect(true).to.be.false;
    });
  });
});
