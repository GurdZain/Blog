var Blog = require('../proxy').Blog;
var mongoose = require('mongoose');
var logger = require('../common/logger');

exports.show_index = function(req, res){
    Blog.test(function(err, msg){
        if(err){
            logger.error(err);
        }
        logger.info(msg);
    });
    res.render('index', {title:'test'});
};