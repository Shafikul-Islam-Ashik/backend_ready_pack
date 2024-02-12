// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dunehdsbm",
//   api_key: "616679997636665",
//   api_secret: "QuSNCCoCHU98tIq2G4XjDNiqC8k",
// });

import cloudinary from "cloudinary";

// configuration
cloudinary.v2.config({
  cloud_name: "dunehdsbm",
  api_key: "616679997636665",
  api_secret: "QuSNCCoCHU98tIq2G4XjDNiqC8k",
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
