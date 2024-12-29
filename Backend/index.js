import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"

import path from "path";

import {connectDB} from "./src/lib/db.js"

import authRoute from '../Backend/src/routes/auth.route.js';
import messageRoutes from './src/routes/message.route.js';
import { app, server } from "./src/lib/socket.js";

dotenv.config();

const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
})
);

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
    })

}

server.listen(PORT,()=>{
    console.log("Server is running on PORT:"+PORT);
    connectDB();
});

