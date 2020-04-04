var express = require('express');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marco_spbr:<P@ssword>@trabalhonavarrocluster-efyx9.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser:true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 3000;

var indexRoute = require("./app/src/routes/index-routes.js");
var productRoute = require("./app/src/routes/product-routes");

app.use('/api', indexRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
    console.log('Server funcionando show da bola');
});