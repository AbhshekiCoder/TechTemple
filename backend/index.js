const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
const register = require('./api/users/Register');
const login = require('./api/users/Login');
const user_profile_update = require('./api/users/Update');
const user_password_reset = require('./api/users/Password_Reset');
const register_apps = require('./api/users/register_apps');
const user_detail = require('./api/users/user_detail');
const jwt = require('jsonwebtoken');

const url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function mongodbConnect(){
    mongoose.connect('mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log('connected');

    }).catch((err)=>{
        console.log(err.message);
    })

}
mongodbConnect();

app.post('/register', register);
app.post('/login', login);
app.put('/user_profile_update', user_profile_update);
app.post('/user_password_reset', user_password_reset);
app.post('/register_apps', register_apps);
app.post('/user_detail', user_detail);

app.post('/token', (req, res)=>{
    let {token} = req.body;
    if (!token) return res.status(403).send('Token is required');
    jwt.verify(token, '123456', (err, decoded) => {
      if (err) return res.status(401).send('Invalid token');
      req.email = decoded.email;
      res.send(decoded.email);
      
      
    });
  });

app.get('/', (req, res)=>{
    res.send('<h1>hello</h1>')
})
app;

app.listen(3000)


