import mongoose from "mongoose";
import { dbURL } from "./config.js";





const connectDB = async()=>{
    try {
        await mongoose.connect(dbURL)
        console.log("the data connection")
    } catch (error) {
        console.log("the data are not connected" , error);
    }
}

export default connectDB