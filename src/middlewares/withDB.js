const connectDB = require("../config/connectDB");

const withDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = withDB;
