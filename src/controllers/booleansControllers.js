const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateController = (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
};

const truthinessController = (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
};

const isOddController = (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (Number.isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  }
  res.status(200).send({ result: isOdd(number) });
};

const startsWithController = (req, res) => {
  if (req.params.character.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).send({ result: startsWith(req.params.character, req.params.string) });
};

module.exports = { negateController, truthinessController, isOddController, startsWithController };
