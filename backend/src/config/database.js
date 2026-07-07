import mongoose  from "mongoose";

const connectDB=async ()=>{
    try{
        const connectionInstance=mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`mongodb was connected${process.env.MONGODB_URL}`)

    }catch(error){
        console.log("connection failes",error);
        process.exit(1);
    }
}


export default connectDB;



