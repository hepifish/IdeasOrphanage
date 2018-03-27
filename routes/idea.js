var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Idea = require('../models/Idea.js');

/* GET ALL Ideas */
router.get('/', function(req, res, next) {
  Idea.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Idea BY ID */
router.get('/:id', function(req, res, next) {
  Idea.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Idea */
router.post('/', function(req, res, next) {
  Idea.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Idea */
router.put('/:id', function(req, res, next) {
  Idea.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE IDEA */
router.delete('/:id', function(req, res, next) {
  Idea.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;