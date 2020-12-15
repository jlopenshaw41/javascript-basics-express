const express = require('express');

const stringsRouter = express.Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

stringsRouter.get('/hello/:string', (req, res) => {
  const string = sayHello(req.params.string);
  res.status(200).send({ result: string });
});

stringsRouter.get('/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

stringsRouter.get('/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

stringsRouter.get('/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.status(200).send({ result: firstCharacter(req.params.string) });
  }
  res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
});

module.exports = stringsRouter;
