const express = require('express');

const stringsRouter = require('./routes/stringsRouter');

const numbersRouter = require('./routes/numbersRouter');

const arraysRouter = require('./routes/arraysRouter');

const booleansRouter = require('./routes/booleansRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringsRouter);

app.use('/numbers', numbersRouter);

app.use('/arrays', arraysRouter);

app.use('/booleans', booleansRouter);

module.exports = app;
