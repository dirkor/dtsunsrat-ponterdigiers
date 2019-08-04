const express = require('express');
const routes = require('./routes/api');

//set up fungsi ekspresi aplikasi
const app = express();

//Inisialisasi atau menggunakan modul routes api
app.use('/api', routes);

//set up aplikasi untuk mendengarkan request
app.listen(process.env.port || 4000, function(){
    console.log('aplikasi mulai mendengarkan request');
});