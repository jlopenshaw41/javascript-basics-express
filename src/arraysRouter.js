const express = require('express');

const arraysRouter = express.Router();

const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  removeNthElement,
  elementsStartingWithAVowel,
} = require('./lib/arrays');

arraysRouter.post('/element-at-index/:index', (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

arraysRouter.post('/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

arraysRouter.post('/append', (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value, req.body.array) });
});

arraysRouter.post('/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

arraysRouter.post('/remove-element', (req, res) => {
  if (!req.query.index && req.query.index !== 0) {
    res.status(200).send({ result: removeNthElement(0, req.body.array) });
  }
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
});

module.exports = arraysRouter;
