'use strict';

//index to keep track of directory structure

var TimeHandler = require(process.cwd() + '/app/controllers/timeHandler.server.js');

module.exports = function (app) {

  app.route('/')
      .get(function (req,res){
        res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/*')
      .get(TimeHandler);
};
