# API Project: Request Header Parser Microservice for FCC

This project was built as part of the [FreeCodeCamp curriculum](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice).

https://request-header-parser-microservice.allymurray.com/

## Built with

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [CORS](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)

### Development tools

- [ESLint](https://eslint.org)
- [nodemon](https://nodemon.io)

## User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:

- [base_url]/api/whoami

#### Example output:

- `{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}`
