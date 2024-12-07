const { default: mongoose } = require("mongoose")
const mongos=require("mongoose")
const connectDB=()=>{
    try {
        const connect=mongoose.connect(process.env.CONNECTION_STRING);
        console.log("database connected")
    } catch (error) {
        console.log("error")
    }
}

module.exports=connectDB