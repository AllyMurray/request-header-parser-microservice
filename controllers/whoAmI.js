const whoAmIRouter = require('express').Router();

whoAmIRouter.get('/', (request, response) => {
  response.json({
    ipaddress: request.connection.remoteAddress,
    language: request.headers['accept-language'],
    software: request.headers['user-agent']
  });
});

module.exports = whoAmIRouter;
