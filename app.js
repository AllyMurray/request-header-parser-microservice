const cors = require('cors');
const express = require('express');
const app = express();
const whoAmIRouter = require('./controllers/whoAmI');

app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/api/whoami', whoAmIRouter);

module.exports = app;
