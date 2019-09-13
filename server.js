require('./models/db')
const express    = require('express')
const exphbs     = require('express-handlebars')
const bodyparser = require('body-parser');
const app        = express();
const employeeController = require('./controllers/employeeController')

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) { res.render('home') })

app.use('/employee', employeeController)

app.listen(3000, () => { console.log("Server start Port : 3000")})