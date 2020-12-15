const express = require('express');

const numbersRouter = express.Router();

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

numbersRouter.get('/add/:firstNumber/and/:secondNumber', (req, res) => {
  const firstInteger = parseInt(req.params.firstNumber, 10);
  const secondInteger = parseInt(req.params.secondNumber, 10);

  if (Number.isNaN(firstInteger) || Number.isNaN(secondInteger)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({ result: add(firstInteger, secondInteger) });
});

numbersRouter.get('/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstInteger = parseInt(req.params.firstNumber, 10);
  const secondInteger = parseInt(req.params.secondNumber, 10);

  if (Number.isNaN(firstInteger) || Number.isNaN(secondInteger)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).send({
    result: subtract(secondInteger, firstInteger),
  });
});

numbersRouter.post('/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: multiply(a, b) });
});

numbersRouter.post('/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

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

numbersRouter.post('/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);

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

module.exports = numbersRouter;
