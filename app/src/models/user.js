var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    nome:String,
    email:String,
    senha:String
});

module.exports = mongoose.model('Usuario',productSchema);