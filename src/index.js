// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// .env file se environment variables load karein
dotenv.config({
    path: './env'  // Yahan ensure karein ki path sahi ho, default '.env' hota hai
});

// Database se connect karein
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(` SEVER IS RUNNING AT PORT : ${process.env.PORT}`);
    })

})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!! ",err);
});
















/*
import express from "express"
const app = express()

( async () =>  {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/$
            {DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`APP is listninig on port 
                    ${process.env.PORT}`);
            })
        
    } catch (error) {
        console.log("ERROR", error);
        throw err
    }
}) ()
*/