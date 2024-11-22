const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        uniqued : true,
        minlength : 2,
        maxlength : 30
    },
    userId: {
        type :  String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        required: true,
        minlength : 8,
        maxlength
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;