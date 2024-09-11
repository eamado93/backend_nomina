const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = ()=>{
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.URL_MONGO)
    .then((success) => console.log("Conexión exitosa"))
    .catch((err)=> console.log(err.message));
}

module.exports = dbconnect;