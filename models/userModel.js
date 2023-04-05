const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        id:mongoose.Schema.Types.ObjectId,
        name:{
            type: String,
            require: [true, "Please enter your name"]
        },
        password:{type:String,require: true},
        updated: { type: Date, default: Date.now },
    }
)

const UserModel = mongoose.model('User',userSchema);


module.exports(UserModel);