const express = require('express');

const booleansRouter = express.Router();

const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

booleansRouter.post('/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

booleansRouter.post('/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

booleansRouter.get('/is-odd/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (Number.isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  }
  res.status(200).send({ result: isOdd(number) });
});

booleansRouter.get('/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).send({ result: startsWith(req.params.character, req.params.string) });
});

module.exports = booleansRouter;
