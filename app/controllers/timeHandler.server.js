'use strict';

function timeHandler(req, res) {
  var paramNum = +req.params[0];
  var dateResponse = {};

  //function to make create a natural language date
  function naturalDate (dateObj) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"];

    //checks if a valid date object is passed in
    if (months[dateObj.getUTCMonth()] === undefined){
      return null;
    } else {
      var dateString = months[dateObj.getUTCMonth()] + " " + dateObj.getUTCDate() + ", " + dateObj.getUTCFullYear();
      return dateString;
    }
  }

  //check if a number was entered as the parameter
  if (isNaN(paramNum)) {
    var date = new Date(req.params[0]);
  } else {
    var date = new Date(Math.floor(paramNum * 1000));
  }

  dateResponse['unix'] = Math.floor(date.getTime() / 1000);
  dateResponse['natural'] = naturalDate(date);
  res.send(dateResponse);
}

module.exports = timeHandler;
