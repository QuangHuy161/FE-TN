const mongoose = require("mongoose")


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema = mongoose.Schema(
    {
        fullname:{
            type: String,
            require: [true, "Please enter your name"]
        },
        mail:{
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password:{
            type:String,
            require: true
        },
        updated: { type: Date, default: Date.now },
    }
)

const UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;