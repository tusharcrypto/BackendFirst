import {v2 as fileuploader} from "cloudinary";
import { response } from "express";
import fs from "fs";// node provide a fs mean file system withe help of that we can perform the operation on the file

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env. CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOncloudinary = async (localFilePath)=>{
 try {
  // check whether file is present or not in the local device
  if(!localFilePath) return null;

  // uplaoding thr file on cloudniary
 const response  = await fileuploader.uploader.upload(localFilePath,{resource_type:"auto"})

  //check whether file uploaded succesfully or not we have to check
  console.log("file uploade successfully on cloudianry",response.url)
  return response;

  
 } catch (error) {
  // it remove the local saved file while uploading file on clodinary
  fs.unlinkSync(localFilePath)
  return null;
  
 }
}

export {uploadOncloudinary};