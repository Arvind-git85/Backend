 import {app} from "./app.js" 
import connectDB from "../src/db/db_connection.js"
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`sever is running at port: ${process.env.PORT}`);
    })
})
.catch( (e) => {
    console.log("MongoDB connection error", e)
})