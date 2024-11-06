const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number
});

const Trip = mongoose.model("trips", tripSchema);

module.exports = Trip; // Do not edit/remove this line !
