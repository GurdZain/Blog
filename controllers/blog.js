var Blog = require('../proxy').Blog;
var mongoose = require('mongoose');
var logger = require('../common/logger');

exports.show_index = function(req, res){
    //Blog.testQ()
    //  .then(function(data){console.log(data)})
    //  .catch(function(err){console.log(err)});
    Blog.testPromise().then(function(data){console.log(data)});
    res.render('index', {title:'test'});
};