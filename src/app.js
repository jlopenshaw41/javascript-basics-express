/* eslint-disable radix */
const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

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

module.exports = app;
