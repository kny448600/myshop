const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hsh448600:1234x@hasanghyun.afxjvtw.mongodb.net/?retryWrites=true&w=majority&appName=hasanghyun');
    }
}