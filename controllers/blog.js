var fs = require('fs');
var Blog = require('../proxy').Blog;
var logger = require('../common/logger');
//var markdown = require('markdown').markdown;
var redis = require('../common/redis');
var marked = require('marked');


exports.show_index = function(req, res){
    //Blog.testQ()
    //  .then(function(data){console.log(data)})
    //  .catch(function(err){console.log(err)});
    Blog.getBlogTitleTime()
      .then(function(data){
          console.log(data)
          res.render('index', {title:'test', file:data});
      });
};

exports.show_detail = function(req, res, next){
    //从数据库获取文件信息,并读取
    var id = req.params['id'];
    function handle_document_file(obj){
        fs.readFile(obj['path'], function(err, content){
            if(err){
                logger.error(err);
                next();
            }
            else{
                redis.set(id, content.toString());
            }
            logger.info(content.toString());
            res.render('detail',{title: 'test',detail: marked(content.toString())});
        })
    }
    //从 redis 获取 md 内容
    function handle_document_md(redis_document){
        if(redis_document == null){
            Blog.getPathByID(id)
              .then(handle_document_file)
              .catch(function(err){
                  logger.error(err);
              })
        }
        else{
            res.render('detail',{title: 'test',detail: marked(redis_document)});
        }
    }

    redis.get(id)
      .then(handle_document_md)
      .catch(function(err){
          logger.error(err)
      });
};