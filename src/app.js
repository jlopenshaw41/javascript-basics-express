/* eslint-disable radix */
const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  removeNthElement,
  elementsStartingWithAVowel,
} = require('./lib/arrays');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  const string = sayHello(req.params.string);
  res.status(200).send({ result: string });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.status(200).send({ result: firstCharacter(req.params.string) });
  }
  res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:firstNumber/and/:secondNumber', (req, res) => {
  const firstInteger = parseInt(req.params.firstNumber);
  const secondInteger = parseInt(req.params.secondNumber);

  if (Number.isNaN(firstInteger) || Number.isNaN(secondInteger)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: add(firstInteger, secondInteger) });
});

app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstInteger = parseInt(req.params.firstNumber);
  const secondInteger = parseInt(req.params.secondNumber);

  if (Number.isNaN(firstInteger) || Number.isNaN(secondInteger)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({
    result: subtract(secondInteger, firstInteger),
  });
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if ((!req.body.a && req.body.a !== 0) || (!req.body.b && req.body.a !== 0)) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if ((!req.body.a && req.body.a !== 0) || (!req.body.b && req.body.a !== 0)) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: remainder(a, b) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).send({ result: addToArray(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  if (!req.query.index && req.query.index !== 0) {
    res.status(200).send({ result: removeNthElement(0, req.body.array) });
  }
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (Number.isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  }
  res.status(200).send({ result: isOdd(number) });
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).send({ result: startsWith(req.params.character, req.params.string) });
});

module.exports = app;
