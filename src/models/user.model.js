import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    userName:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      trim:true,
      index:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      trim:true,
      
    },
    fullName:{
      type:String,
      required:true,
      trim:true,
      index:true
    },
    avatar:{
      type:String ,// bcause we using cloudinary thrd party service to uplaod image which give url so we using url
      required:true,
    },
    coverimage:{
      type:String ,
    },
    watchHistory:{
      type:Schema.Types.ObjectId,
      ref:"Video"
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },refrshToken:{
      type:string
    }

},{timestamps:true}
)

export const User = mongoose.model("User",userSchema);