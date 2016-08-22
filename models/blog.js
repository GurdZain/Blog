var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    time: {type: Date},
    tag: {type: String},
    content: {type: String},
    author: {type: String}
});

mongoose.model('blog', BlogSchema);