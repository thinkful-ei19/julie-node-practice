'use strict';

const app = require('../');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const Todo = require('../models/todo');

describe('Todo app', function() {
  describe('GET `/api/todos`', function() {
    it('should get a list of Todos', function() {
      const dbPromise = Todo.find();
      const apiPromise = chai.request(app).get('/api/todos');
      return Promise.all([dbPromise, apiPromise])
        .then(function([data, res]) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(data.length);
        });
    });
  });
  
  describe('GET `/api/todos/:id`', function() {
    it.only('should get a single todo', function() {
      const dbPromise = Todo.findOne();
      let data;
      dbPromise.then(function(_data) {
        data = _data;
        console.log(dbPromise);
        console.log(data);
        return chai
          .request(app)
          .get(`/api/todos/${data.id}`)
          .then(function(res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.keys(['id', 'isDone', 'text']);
          });
      });

    });
  });
  
  describe('POST `/api/todos/`', function() {
    it('should create a new todo', function() {
      return chai
        .then(function(res) {
          expect(true).to.be.false;
          expect(res).to.have.status(200);
        });
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
