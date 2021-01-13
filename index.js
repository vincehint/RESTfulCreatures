const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');


//middleware
app.set('view engine', 'ejs');
app.use(ejsLayouts);
// body parser middleware
app.use(express.urlencoded({extended: false}));
app.use('/dinosaurs', require('./controllers/dinosaurs'));
app.use('/prehistoric-creatures', require("./controllers/prehistoric-creatures"));


app.get('/', (req, res) => {
    res.render('home');
});






app.listen(3000, () => {
    console.log("Whaddup party people!!!");
});