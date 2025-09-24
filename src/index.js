require("dotenv").config();
const express = require("express");
const notFound = require("./routes/notFound");
const setupMiddlewares = require("./middlewares/setupMiddlewares");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const withDB = require("./middlewares/withDB");

const app = express();
app.use(withDB);
setupMiddlewares(app);

app.get("/", (req, res) => {
  res.json({
    message: "SERVER",
  });
});

//routes
app.use(express.json());
app.use("/v1/auth", require("./routes/auth.route"));
app.use("/v1/users", require("./routes/user.route"));

//404
app.use(notFound);
app.use(globalErrorHandler);

if (require.main === module) {
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`server is on port ${PORT} ✔`);
  });
}

module.exports = app;
