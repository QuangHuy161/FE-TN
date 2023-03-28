const express= require("express");
const { Mongoose, default: mongoose } = require("mongoose");

const app = express();


const database = module.exports = () =>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifieldTopology: true
    }

    try {
        mongoose.connect(
            "mongodb+srv://quanghuy161:Tmh5OdLzIzmh9Yup@cluster0.3wcmiob.mongodb.net/?retryWrites=true&w=majority",
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

app.listen (5000, () =>{
    console.log("serer is running on port 5000")
})