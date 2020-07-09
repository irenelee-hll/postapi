const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./app/router');
const config = require('./app/config');
const app = express();
// app.listen(8080, err => {
//   if(err) console.error(err);
//   console.log('Server listening on port 8080...');
// });

// app.listen(app.get('port'), err=>{
//   if(err) console.error(err);
//   console.log(`Server listening on port ${app.get('port')}...`);
// });

// app.set('port', config.port);


// app.listen(app.get('port'), err=>{
//   if(err) console.error(err);
//   console.log(`Server listening on port ${app.get('port')}...`);
//   const db = mongoose.connect(config.db);
//   mongoose.connection.on('connected', () => {
//     console.log(`Mongoose connected to ${config.db}`);
//   });
// });

if(process.env.NODE_ENV === "test") {
  app.set('port', config.test_port);
  app.listen(app.get('port'), err => {
    if(err) console.error(err);
    console.log(`Server listening on port$ {app.get('port')}...`);
    const db = mongoose.connect(config.test_db);
  });
} else {
  app.set('port', config.port);
  app.listen(app.get('port'), err => {
    if(err) console.error(err);
    console.log(`Server listening on port ${app.get('port')}...`);
    const db = mongoose.connect(config.db);
    mongoose.connection.on('connected', () => {
      console.log(`Mongoose connected to ${config.db}`);
    });
  });
}

// router(app);
// needed for testing porpoises only
module.exports = app;