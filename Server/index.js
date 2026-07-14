import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./Configs/ConnectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./Routes/auth.routes.js";

dotenv.config();

const app =express();

app.use(express.json());
// app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get("/",(req,res)=>{
    res.json("hello");
})
const PORT = process.env.PORT;
app.use("/api/auth",authRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    ConnectDB();
})