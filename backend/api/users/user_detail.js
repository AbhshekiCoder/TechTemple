const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const login = require('../../model/usermodal/Login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const jwtdecode = require('jwt-decode')
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();
router.post('/user_detail', async(req, res) =>{
    const {token} = req.body;
    const user = jwt.decode(token);
    console.log(user)
   
    const client = new MongoClient(url);
    const db = client.db("Tech_Temple");
    const collection = db.collection("users");
    collection.findOne({email: user.email}).then(result =>{
        res.send(result);

    })
   
})

module.exports = router;