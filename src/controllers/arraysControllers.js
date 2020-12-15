const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  removeNthElement,
  elementsStartingWithAVowel,
} = require('../lib/arrays');

const elementAtIndex = (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
};

const toString = (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
};

const append = (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value, req.body.array) });
};

const startsWithVowel = (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
};

const removeElement = (req, res) => {
  if (!req.query.index && req.query.index !== 0) {
    res.status(200).send({ result: removeNthElement(0, req.body.array) });
  }
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
};

module.exports = { elementAtIndex, toString, append, startsWithVowel, removeElement };
