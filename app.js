const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRoute = require('./routes/admin');
const storeRoute = require('./routes/store');

const app = express();

app.set('view-engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute);
app.use(storeRoute);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found.</h1>");
});

app.listen(5000);
