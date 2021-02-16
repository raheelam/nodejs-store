const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.set('view-engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));


app.use('/',(req,res,next)=>{
   res.render(path.join(__dirname, './', 'views', 'index.ejs'))
});

app.listen(5000);
