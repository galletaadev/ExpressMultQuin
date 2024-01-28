const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.render('quiniela', { title: 'Quiniela de Fútbol' });
});

module.exports = router;
