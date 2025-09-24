const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

module.exports = cloudinary;

/** TO USE:
 * const publicId = `user_images/-${Date.now()}`;
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: publicId,
    });
    imageUrl = result.secure_url;
    imagePublicId = result.public_id; (unique id on delete)
 */
