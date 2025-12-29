import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/movie");
        console.log("mongoDB connected successfully..!");
        
    }catch(err){
        console.log("mongoDB connection failed...!" , err);
        
    }

}