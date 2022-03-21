'use strict';

const express = require('express');

let app, serverConnection;

const initializeServer = () => {
  
  app = express();

  app.use(express.static('../client'));

  app.get('/ping', (req, res) => {
    res.send('pong');
  })
  

  serverConnection = app.listen();
  console.log(`app running on port ${serverConnection.address().port}`);

  return app;

}

const stopServer = () => {

  serverConnection.close();

}



  
module.exports = {
  initializeServer,
  stopServer,
};