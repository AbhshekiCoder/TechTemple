const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const register = require('../../model/usermodal/Register');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/register', async(req, res) =>{
    const{name, email, password} = req.body;
    let password1 = 0;
    try{
        let password1 = await bcrypt.hash(password, 10);
        let obj = new register({
            name: name,
            email: email,
            password: password1
        });
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("users");
        collection.find({email: email}).toArray().then(result =>{
            if(result.length > 0){
               const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const register = require('../../model/usermodal/Register');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/register', async(req, res) =>{
    const{name, email, password} = req.body;
    let password1 = 0;
    try{
        let password1 = await bcrypt.hash(password, 10);
        let obj = new register({
            name: name,
            email: email,
            password: password1
        });
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("users");
        collection.find({email: email}).toArray().then(result =>{
            if(result.length > 0){
                res.send({success: false, message: "email already registered"});
            }
            else{
                collection.insertOne(obj).then(()=>{
                    res.send({success: true, message: "successfully registered"});
                    console.log("send successfully");

                })

            }
        })
      
    }
    catch(err){
        console.log(err.message);
    }


})

module.exports = router;
            }
            else{
                collection.insertOne(obj).then(()=>{
                    res.send({"success": true, "message": "successfully registered"});
                    console.log("send successfully");

                })

            }
        })
      
    }
    catch(err){
        console.log(err.message);
    }


})

module.exports = router;