const express= require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Mongoose, default: mongoose } = require("mongoose");

const app = express();


var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


const database = module.exports = () =>{
    try {
        mongoose.connect(
            "mongodb+srv://quanghuy161:Tmh5OdLzIzmh9Yup@cluster0.3wcmiob.mongodb.net/test",
            options
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
    res.json({
        "donvi":[   {
                "ten":"g",
                "ma": "dvg" // ma don vi duoc ghep tu dv+ten
            },
            {
                "ten":"ml",
                "ma": "dvl"
            },
            {
                "ten":"l",
                "ma": "dvl"
            },
            {
                "ten":"ly",
                "ma": "dvly"
            },
        ],
        "nhomvattu":[
            {
                "ten":"mon",
                "ma": "nvtmon" // ma nhom vat tu duoc ghep tu nvt + ten
            },
            {
                "ten":"nl",
                "ma": "nvtnl"
            },
            
        ]
})
})


app.post('/add_data', async (req,res) => {
    const ten = req.body.label;
    const donvi = req.body.donvi;
    const nhomvattu = req.body.nhomvattu;
    const loai = req.body.loai;
    const img = req.body.img;


}) 

app.get('/login', (req,res) =>{

})

app.listen (3000, () =>{
    console.log("serer is running on port 3000")
})

