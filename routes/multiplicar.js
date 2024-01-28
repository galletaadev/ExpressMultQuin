const router = require('express').Router();
var multiplicarHelper = require('../helpers/multiplicar');

router.get('/tabla-multiplicar', function (req, res, next) {
    res.render('tablaMultiplicar', { title: 'Tabla de Multiplicar' });
});

router.post('/tabla-multiplicar', async function (req, res, next) {
    const base = req.body.base;
    const resultado = await multiplicarHelper.multiplicar(base);
    res.render('resultado', { title: 'Resultado', resultado: resultado });
});

module.exports = router;