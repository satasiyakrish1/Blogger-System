import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('------- enter your mongoDB URI------------/blog-app');
    console.log("DB Connected");
}