import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Configs/ConnectDB.js";

dotenv.config();

const app =express();

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.json("hello");
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    ConnectDB();
})