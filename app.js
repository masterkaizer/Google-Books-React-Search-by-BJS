const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const nocache = require('nocache');
const { Mongoose } = require('mongoose');
const mongoose = require("mongoose");


const app = express();


const port = process.env.PORT || 5000;

// Checking application environment
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`NODE_ENV: ${app.get('env')}`);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Adding middleware

app.use(cors());
app.use(bodyparser.json({ limit: '50mb', extended: true }));
// bodyParser = {
//     json: { limit: '50mb', extended: true },
//     urlencoded: { limit: '50mb', extended: true }
// // }
// app.use(bodyParser);
app.use(nocache());
app.use(express.static(__dirname + '/dist/quotationTool/'));
require('./startup/routes')(app);
require('./startup/db')();

if (process.env.NODE_ENV == 'production') {
    require('./startup/prod')(app);
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gb",{ useUnifiedTopology: true,  useNewUrlParser: true, useCreateIndex: true });
app.listen(port, () => {
    console.log('🌎  ==> Server started at port ' + port);
});
