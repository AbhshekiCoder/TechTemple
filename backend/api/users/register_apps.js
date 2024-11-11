const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const register = require('../../model/usermodal/Register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/register_apps', async(req, res) =>{
    const{name, email, token} = req.body;
   
    try{
      
        let obj = {
            name: name,
            email: email,
            
        };
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("users");
        collection.find({email: email}).toArray().then(result =>{
            if(result.length > 0){
                const token = jwt.sign({ email: email }, '123456', { expiresIn: '1h' });
           
                res.send({success: true, message: "login successfully", token: token});

            }
            else{
                collection.insertOne(obj).then(()=>{
                    const token = jwt.sign({ email: email }, '123456', { expiresIn: '1h' });
           
                     res.send({success: true, message: "login successfully", token: token});
                })

            }
        })
      
    }
    catch(err){
        console.log(err.message);
    }


})

module.exports = router;