const express = require('express');
const router = express.Router();
const Digier = require('../models/digiers')

//Ambil daftar digiers dari database
router.get('/digiers', function(req, res){
    res.send({type: 'GET'});
});

//Tambah data digiers ke database
router.post('/digiers', function(req, res, next){
    Digier.create(req.body).then(function(digiers){
        res.send(digiers);
    }).catch(next);
    // var digier = new Digier(req.body);
    // digier.save();
    // res.send({
    //     type: 'POST',
    //     name: req.body.name,
    //     tema: req.body.tema,
    //     availability: req.body.available
    // });
});

//Update data digiers dalam database
router.put('/digiers/:id', function(req, res){
    Digier.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Digier.findOne({_id: req.params.id}).then(function(digiers){
            res.send(digiers);
        });
    });
});

//Hapus data digiers dari database
router.delete('/digiers/:id', function(req, res){
    Digier.findByIdAndRemove({_id: req.params.id}).then(function(digiers){
        res.send(digiers);
    });
});

module.exports = router;