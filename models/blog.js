var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    time: {type: Date},
    tag: {type: Array},
    path: {type: String},
    cat: {type: String},
    title: {type: String}
});

mongoose.model('blog', BlogSchema);