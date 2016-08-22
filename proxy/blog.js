var Q = require('q');
var bb = require('bluebird');
var Blog = require('../models').Blog;
var mongoose = require('mongoose');
mongoose.Promise = bb;

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

exports.testQ = function(){
    var deferred = Q.defer();
    Blog.find({}, function(err, data){
        if (err) deferred.reject(err);
        else deferred.resolve(data);
    });
    return deferred.promise;
};

exports.testPromise = function(){
    return Blog.find({}).exec();
};