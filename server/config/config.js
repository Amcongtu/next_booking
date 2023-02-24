import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log("Connected to MongooseDB");
       
    }catch(error){
        console.log("DB Error");
    }
}
export default connectDB;
