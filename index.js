const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');

//set up fungsi ekspresi aplikasi
const app = express();

//Connect ke MongoDB
mongoose.connect('mongodb://localhost/digiersunsrat');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//Inisialisasi atau menggunakan modul routes api
app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

//set up aplikasi untuk mendengarkan request
app.listen(process.env.port || 4000, function(){
    console.log('aplikasi mulai mendengarkan request');
});