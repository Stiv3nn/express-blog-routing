//Importiamo express e utilizziamo la parte di routing
const express = require('express')
const router = express.Router();





// index
router.get('/posts', function (req, res) {
    res.send('Lista dei post');
});
// show
router.get('/posts/:id', function (req, res) {
    res.send('Dettagli del post ' + req.params.id);
});
// store
router.post('/posts', function (req, res) {
    res.send('Creazione nuova post');
});
// update
router.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});
// modify
router.patch('/posts/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});
// destroy
router.delete('/posts/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// Esportare il modulo del router
module.export = router;