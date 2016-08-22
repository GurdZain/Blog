var express = require('express');
var router = express.Router();
var blog = require('../controllers/blog');

/* GET home page. */
router.get('/', blog.show_index);

module.exports = router;
