const express = require('express');
const exp = require('express-handlebars');

const app = express();

const bodyParser = require('body-parser');



app.engine('handlebars', exp());
app.set('view engine', 'handlebars');
app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const indexRouter = require('./controller/indexController')
app.use("/", indexRouter);

app.listen('3000', () => {
    console.log("The app is up and running");
})