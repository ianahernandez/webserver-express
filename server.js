const express = require('express')

const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers')

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Ana',
        anno: new Date().getFullYear()
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
        anno: new Date().getFullYear()
    });
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})