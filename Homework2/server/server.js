const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const connectConfig = 'mongodb+srv://uleecsei:4n8qMgU2bZXFxz9@cluster0-dz2dg.mongodb.net/test?retryWrites=true&w=majority';
const todoRoute = require('./routes/todo');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(connectConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.use('/api/todos', todoRoute);

app.listen(8083);