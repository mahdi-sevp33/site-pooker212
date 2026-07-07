import dotenv from "dotenv"
import connectDB from './config/database.js';
import app from './app.js';
import mongoose  from "mongoose";




dotenv.config({
    path:"./.env"
})

const connectServer=async ()=>{
    try{
        await connectDB();

    }catch{
        app.on("error",(error)=>{
            console.log("ERROR",error)
            throw error;
        })
    }
    try
    {
        app.listen(process.env.PORT || 27017,async()=>{
            console.log(`connected to port 
                ${process.env.PORT}`)
        })
    }catch(error){
        console.log("failed to connect MONGO db",error)

    }
    
    
}


connectServer()









// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // 1. Connect to MongoDB
// // We use process.env.MONGO_URI so we don't hardcode the address
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ Successfully connected to Local MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // 2. Define a simple Schema (What your data looks like)
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, required: true, unique: true },
//   age: Number
// });

// // 3. Create a Model (The tool used to talk to the database)
// const User = mongoose.model("User", UserSchema);

// // 4. Create a Test Route (To save a user and test the connection)
// app.post("/register", async (req, res) => {
//   try {
//     const newUser = new User(req.body); // Takes data from the request body
//     await newUser.save();              // Saves it to MongoDB
//     res.status(201).json({ message: "User saved!", user: newUser });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // 5. Start the Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });
