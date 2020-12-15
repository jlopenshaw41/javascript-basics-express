const express = require('express');

const arraysRouter = express.Router();

const {
  elementAtIndex,
  toString,
  append,
  startsWithVowel,
  removeElement,
} = require('../controllers/arraysControllers');

arraysRouter.post('/element-at-index/:index', elementAtIndex);

arraysRouter.post('/to-string', toString);

arraysRouter.post('/append', append);

arraysRouter.post('/starts-with-vowel', startsWithVowel);

arraysRouter.post('/remove-element', removeElement);

module.exports = arraysRouter;
