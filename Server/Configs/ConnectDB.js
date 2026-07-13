import mongoose from "mongoose";

const ConnectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.log("DB ERROR" ,error);
    }
}

export default ConnectDB;