const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/store');

const app = express();

app.set('view-engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute);
app.use(shopRoute);

app.listen(5000);
