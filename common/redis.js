var Redis = require('ioredis');
var config = require('../config');
var logger = require('./logger');

var client = new Redis({
	port: config.redis.port,
	host: config.redis.host,
	db: config.redis.db
});

client.on('error', function(err){
	if (err) {
		logger.error('connect to redis error, check your redis config', err);
		process.exit(1);
	}
});

exports = module.exports = client;