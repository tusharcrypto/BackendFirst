
// we required this to load as early as possible to load because we wan all required env varaible should available to every method

// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
dotenv.config({path:'./env'});
 import connectDB from "./db/index.js";
 import {app} from "./app.js"
// dotenv.config({path:'./env'})

connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("Server is listning on port",process.env.PORT);
  })
}).catch((error)=>{
  console.error("Connection failed due to some error !!",error)
})



































 //-----------------------------------------------------
// stemp 1: import mongoose
// stem 2: write connection function in which we should use try catch to handle error and async wait beacause database are in the other continent
// we comment the moongse and db name beacse commit it and not using it here now
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
//  step 4: as it we are connecting db in the here index file only we have follwing express code alse
// import express from "express"
// const app = express()

//  it is imediate exexuting function know as IIFY
// ( async()=>{
//   try {

//      step 3: write the connection code and it rquires two kind of parameter 1 is db connection url and database name which we declare in the conatant

//    await mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`)

//     app have lots of litner but we use this to check the error
//    app.on("error ocurred",(error)=>{
//     console.error("error",error)
//     throw error
//    })
//     app.listen(process.env.PORT,()=>{
//       console.log(`App is listning on the port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("Error occured:",error);
//     throw error
//   }

// })()