var express = require('express');
var router = express.Router();

const orderController = require('../controllers').order;

router.get('/order', orderController.list);
router.post('/order', orderController.add);
router.put('/order/:id', orderController.update);
router.get('/order/:id', orderController.getById);
router.delete('/order/:id', orderController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Restaurant Page' });
});

module.exports = router;
