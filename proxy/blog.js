var Blog = require('../models').Blog;

/**
 *
 *
 *
 *
 **/
exports.getBlogTitleAndTimeByid = function(id, callback){
    Blog.find({_id: id}, callback);
};

/**
 *
 *
 *
 *
 **/
exports.getBlogContentByid = function(id, callback){
    Blog.findOne({_id: id}, function (err, message){
        if(err){
            return callback(err);
        }
        return callback(message);
    })
};

exports.test = function (callback) {
    Blog.find({},callback)
};

