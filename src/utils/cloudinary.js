import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
  
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async ({ localFilePath }) => {
  try {
    if (!localFilePath) return null

    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
    //file upload successfully
    console.log("hello")
    console.log("File uploaded on Cloudinary! path:", response.url)
    return response
  } catch (error) {
    console.log(error)
    //file upload failed
    //remove locally saved temp file
    fs.unlinkSync(localFilePath)
    return null
  }
}

export { uploadOnCloudinary }
