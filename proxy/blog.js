var Q = require('q');
var bb = require('bluebird');
var Blog = require('../models').Blog;
var mongoose = require('mongoose');
mongoose.Promise = bb;

/**
 * 获取所有 Blog 的信息列表。
 *
 *
 *
 **/
exports.getBlogTitleTime = function(){
    return Blog.find({},{time:1,title:1}).exec();
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
/**
 * 获取 blog 的文件路径
 *
 *
 *
 **/
exports.getPathByID = function(id){
    return Blog.findOne({_id:id},{path:1}).exec();
};

/**
 * 获取 blog 的文件路径
 *
 *
 *
 **/
exports.addBlog = function(title, file_time, file_tag, file_path, file_cat){
    var new_blog = new Blog();
    new_blog.title = title;
    new_blog.time = file_time;
    new_blog.tag = file_tag;
    new_blog.path = file_path;
    new_blog.cat = file_cat;

    return new_blog.save();
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