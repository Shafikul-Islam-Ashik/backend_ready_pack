import cloudinary from "cloudinary";

import dotenv from "dotenv";

// config dotenv
dotenv.config();

// configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// file upload to cloud
export const fileUploadToCloud = async (path) => {
  const data = await cloudinary.v2.uploader.upload(path);
  return data;
};

// file delete from cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinary.v2.uploader.destroy(publicId);
};
