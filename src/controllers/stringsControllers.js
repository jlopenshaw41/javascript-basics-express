const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const hello = (req, res) => {
  const string = sayHello(req.params.string);
  res.status(200).send({ result: string });
};

const upper = (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
};

const lower = (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
};

const firstCharactersController = (req, res) => {
  if (!req.query.length) {
    res.status(200).send({ result: firstCharacter(req.params.string) });
  }
  res.status(200).send({ result: firstCharacters(req.params.string, req.query.length) });
};

module.exports = { hello, upper, lower, firstCharactersController };
