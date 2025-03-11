const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongoDB connected');
    }
    catch(err){
        console.error('database connection is failed',err);
        process.exit(1);
    }

};
module.exports = connectDB;