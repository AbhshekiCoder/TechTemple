const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const courses = require('../../model/TeacherModal/courses');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/courses', async(req, res) =>{
    const{title, description, price, duration, projects, languages} = req.body;
    
    try{
       
        let obj = new courses({
            title: title,
            description: description,
            price: price,
            duration: duration,
            projects: projects,
            languages: languages,
           

        });
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("courses");
        collection.insertOne(obj).then(()=>{
            res.send("successfully updated");
        })
    }catch(err){
        console.log(err);
    }
    })

module.exports = router;