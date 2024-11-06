
const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');
const moment = require('moment');

const dateFormat = import('dateformat');

/* GET all trips. */
router.get('/', (req, res) => {
  Trip.find().then(data => {
    res.json({ allTrips: data })
  })
});

router.get('/:departure/:arrival/:date', (req, res) => {
  const { departure, arrival, date } = req.params;
  
  Trip.find({ 
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") }, 
    date: { $gte: new Date(date), $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)) } 
  }).then(data => {
    if(data){
      res.json({ result: true, trips: data });
    } else {
      res.json({ result: false, error: "No trips found" });
    }
  })
});





module.exports = router;
