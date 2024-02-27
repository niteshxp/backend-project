import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })

        app.on("error", (error) => {
            console.log('Error : ', error);
        })
    })
    .catch((err) => {
        console.log('MongoDB connect failed !', err);
    })


/***
import express from "express"
const app = express()

    // ; for making sure that the code is not concatenated with the previous line
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)

            app.on("error", (error) => {
                console.log("ERRR: ", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`);
            })

        } catch (error) {
            console.error("DB Error :- ", error)
        }
    })()

*/