const express= require("express");
const cors = require("cors");
const { Mongoose, default: mongoose } = require("mongoose");
const Type = require("./models/typeModel");
const Material =require("./models/materialModel");
const User = require ("./models/userModel")
const bcrypt = require("bcrypt");
var bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var url ="mongodb+srv://quanghuy161:Tmh5OdLzIzmh9Yup@cluster0.3wcmiob.mongodb.net/";

const database = module.exports = () =>{
  try {
    mongoose.connect(
        url,
        options,
    )
    console.log("Database connected successfully ")
  }catch (error){
    console.log(error)
    console.log('Database connection failed')
  }
}

database();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/' ,(req,res) =>{
})

const Donvi = mongoose.model("Donvi",Type)
const Nhomvattu = mongoose.model("Nhomvattu",Type)
const Vattu = mongoose.model("Material",Material)

app.get('/donvi' ,(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const donvi = Donvi.find({}).then(items => {
      res.json(items)
  })
})
app.get('/donvi/:_id' ,(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const donvi = Donvi.find({_id: req.params._id}).then(items => {
      res.json(items)
  })
})


app.get('/nhomvattu' ,(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const nhomvattu = Nhomvattu.find({}).then(items => {
      res.json(items)
  })
})
app.get('/nhomvattu/:_id' ,(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const nhomvattu = Nhomvattu.find({_id: req.params._id}).then(items => {
      res.json(items)
  })
})


app.post('/add_data', async (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const vattu = new Vattu(req.body);
  vattu.save();
}) 

app.post('/add_donvi', async (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const donvi = new Donvi(req.body);
  donvi.save();
}) 
app.post('/add_nhomvattu', async (req,res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const nhomvattu = new Nhomvattu(req.body);
  nhomvattu.save();
}) 

app.get('/list_mon',(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const Nguyenlieu = Vattu.find({}).then(items => {
      res.json(items)
  })
})
app.get('/list_mon/:_id',(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const Nguyenlieu = Vattu.find({_id: req.params._id}).then(items => {
      res.json(items)
  })
})

app.get('/update/list_mon/:_id',(req,res) =>{
  res.header("Access-Control-Allow-Origin", "*");
  const Nguyenlieu = Vattu.update()
})



app.post('/auth/signup', (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        console.log(hashedPassword)
        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
        });
        user.save().then((result) => {
            res.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Error creating user",
              error,
            });
          });
  })
  .catch((e) => {
    res.status(500).send({
      message: "Password was not hashed successfully",
      e,
    });
  });
})

app.listen (5000, () =>{
    console.log("serer is running on port 5000,http://localhost:5000/")
})

