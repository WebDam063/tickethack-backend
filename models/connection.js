const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://damienmourot91:1AwAdscljVjpuwjR@cluster0.zg7sn.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
