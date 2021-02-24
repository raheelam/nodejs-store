const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const adminRoute = require('./routes/admin');
const storeRoute = require('./routes/store');
const MONGODB_URI = "mongodb+srv://rahila:nN0H11eOFRDtY0No@cluster0.zwhio.mongodb.net/store";


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

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result)=>{
    app.listen(5000);
}).catch((err)=>console.log(err));


