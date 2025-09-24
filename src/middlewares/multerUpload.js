const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadsDir = path.join(__dirname, "public/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const tempStorage = multer({ dest: "/tmp/" });

const diskStorage = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueName + ext);
    },
  }),
});

module.exports = {
  tempStorage,
  diskStorage,
};

/**
 * DISK STORAGE (Persistent)
 * ------------------------
 * Stores files in ./public/uploads/ folder on your server.
 * Useful when you want to keep files locally (e.g., profile pictures).
 *
 * ✅ Example usage:
 * ----------------
 * const { diskStorage } = require("./multerUpload");
 *
 * // For a single image upload:
 * router.post("/upload", diskStorage.single("image"), (req, res) => {
 *   console.log(req.file); // File info
 *   res.send("File saved in ./public/uploads/");
 * });
 *
 * // For multiple images:
 * router.post("/upload-multiple", diskStorage.array("images", 5), (req, res) => {
 *   console.log(req.files); // Array of file info
 *   res.send("Multiple files saved in ./public/uploads/");
 * });
 */

/**
 * TEMP STORAGE (Memory or /tmp directory)
 * --------------------------------------
 * Stores files in the system temp folder.
 * Useful when you want to upload the file to a remote service (e.g., Cloudinary)
 * and do NOT want to persist it on your local server.
 *
 * ✅ Example usage:
 * ----------------
 * const { tempStorage } = require("./multerUpload");
 *
 * // For a single image upload:
 * router.post("/upload", tempStorage.single("image"), (req, res) => {
 *   console.log(req.file); // File info
 *   res.send("File uploaded to /tmp, ready for processing");
 * });
 *
 * // For multiple images:
 * router.post("/upload-multiple", tempStorage.array("images", 5), (req, res) => {
 *   console.log(req.files); // Array of file info
 *   res.send("Multiple files uploaded to /tmp");
 * });
 */
