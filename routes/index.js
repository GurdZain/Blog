var express = require('express');
var router = express.Router();
var blog = require('../controllers/blog');

/* GET home page. */
router.get('/', blog.show_index);
router.get('/detail/:id', blog.show_detail);

module.exports = router;
