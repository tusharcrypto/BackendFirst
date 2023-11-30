import mongoose from "mongoose"
// import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
  try {

  const connectionInstance= await mongoose.connect(process.env.MOGODB_URL)

  // this help to print the connection of database with our mongo db

    console.log(`Database Connect Sucessfully !! Db host is${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error occured !",error)
   process.exit(1)
  }
}

export default connectDB


