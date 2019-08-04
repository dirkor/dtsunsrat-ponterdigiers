const express = require('express');
const router = express.Router();

//Ambil daftar digiers dari database
router.get('/digiers', function(req, res){
    res.send({type: 'GET'});
});

//Tambah data digiers ke database
router.post('/digiers', function(req, res){
    res.send({type: 'POST'});
});

//Update data digiers dalam database
router.put('/digiers/:id', function(req, res){
    res.send({type: 'PUT'});
});

//Hapus data digiers dari database
router.delete('/digiers/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;