var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var BlogSchema   = new Schema({
    brand: String,
    price: Number
});

//export the schema so it can be used elsewhere in the application
// (wherever we require it)

module.exports = mongoose.model('Blog', BlogSchema);