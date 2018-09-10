const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('streamit', (text) => text.toUpperCase() );
var app = express();

app.set('view engine', hbs);

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        console.log('error while appending file');
    });
    console.log(now);
    next();
});

app.use((req,res,next) => {
    res.render('maintenance.hbs', {
        titel : 'Maintenance'
    })
});

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
    res.render('home.hbs', {
        title : 'Home Page',
        welcomeMessage : 'Welcome to my Page',
    })
});

app.get('/about',(req,res) => {
    res.render('about.hbs', {
        title : 'About Page',
    })
});

app.get('/bad', (req,res) => {
    res.send( {
        error: "Error Page"
    })
});

app.get('/home', (req, res) => {
   
})


app.listen(3000, () => {
    console.log('Node Server is up and running');
});