// const {Sequelize}=require('sequelize');

// const sequelize=new Sequelize('prince_testingDB','princetest','princetest',{
//     host:'localhost',
//     dialect:'mysql',
// })
  
// module.exports=sequelize;




// import mongoose from "mongoose";
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017')
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("Connect to DB")
        })
        connection.on('error', (error) => {
            console.log("Something went wrong MongoDB", error)
        })
    }
    catch (error) {
        console.log("Something went wrong", error)
    }

}
// export default connectDB;
module.exports=connectDB