require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const PORT = process.env.PORT ||3000;
//database connection
const {dbconnection} = require('./dbsettings/dbconnection');
dbconnection();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave:false,
}));

app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message;
    next();
});

app.use((req, res, next) => {
    if (req.session.user && req.cookie.user_sid){
        res.redirect('/home')
    }
        next()
    })



const user = require('./routes/users');
app.use("/user", user);

const admin = require('./routes/admins');
app.use("/", admin)



app.listen(PORT,() => {
    console.log(`listening on port http://localhost:${PORT}`);
});