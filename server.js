const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();

//Mongoose Connection
mongoose.connect("mongodb://localhost:27017/json");
let db = mongoose.connection;

//check connection

db.once("open", function () {
    console.log("Connected To Mongoose MKC");
});

//check for connection

db.on("error", function (err) {
    console.log(err);
});


//Body Parser - For Getting Form Data

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// Express Session Middelware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
let Data = require('./models/data');
let User = require('./models/user');


require('./config/passport')(passport);
// PASSPOST MIDDEL WARE

app.use(passport.initialize());
app.use(passport.session());


// loGIN route
app.post('/user/login', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/send/user',
        failureRedirect: '/user/gadbad',
        failureFlash: false
    })(req, res, next);

});
app.get('/send/user', (req, res) => {
    res.send(req.user, 200);
    console.log(req.user);
})
app.get('/user/gadbad', (req, res) => {
    res.send('Email Or Password May Be Wrong !', 200);
})


app.post('/data', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.password)
    let rows = req.body.username;
    let columns = req.body.password;
    let thing;
    let arr = [];
    for (var y = 0; y < rows.length; y++) {
        thing = {};
        thing['name'] = rows[y];
        thing['type'] = columns[y];
        arr.push(thing);
    }

    let data = new Data({
        url: req.body.url,
        design: arr
    })
    data.save((err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('data Saved')
            console.log(arr);
            res.send('Data Recieved', 201);
        }
    })

})
app.get('/test', (req, res) => {
    let rows = ['a', 'b', 'c'];
    let columns = ['x', 'y', 'z'];
    let thing;
    let arr = [];
    for (var y = 0; y < rows.length; y++) {
        thing = {};
        thing['name'] = rows[y];
        thing['type'] = columns[y];
        arr.push(thing);
    }

    res.send(arr);
})
app.get('/data/:id', (req, res) => {

    Data.findOne({ url: req.params.id }, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(data, 200);
        }
    });
})
app.post('/find-data', (req, res) => {

    Data.findOne({ url: req.body.url }, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            let reqdata = req.body.data;
            let tosend = {};
            for (var i = 0; i < data.design.length; i++) {
                tosend[data.design[i].name] = req.body.data[i];
            }
            Data.updateOne({ url: req.body.url }, { $push: { data: tosend } }, (err) => {
                if (err) {
                    console.log('Error');
                }
                else {
                    res.send('Updated Succesfully', 204);
                }
            });
        }
    });
})
app.post('/signup', (req, res) => {
    let NewUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(NewUser.password, salt, function (err, hash) {
            if (err) {
                console.log(err);
            }
            NewUser.password = hash;
            console.log(NewUser.password);
            NewUser.save(function (err) {
                if (err) {
                    console.log(err);
                    res.send({ stat: 0 }, 200);
                    return;

                } else {
                    res.send({ stat: 1 }, 201);
                }
            });
        });
    });
});


app.listen(5000, () => {
    console.log('Server Started On Port 5000');
})