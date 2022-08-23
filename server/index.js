const express = require('express');
const cors = require('cors');
const session = require('express-session');
// const path = require('path');
const dotenv =require('dotenv');

const bodyParser = require('body-parser');

dotenv.config({path : './config.env' });
const PORT = process.env.PORT || 8000;
const app = express();


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'static')));

// app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.static("/client/build"));
app.use(require('./router/auth'));





app.listen(PORT, ()=>{
    console.log(`Server listening port ${PORT}`);
})
