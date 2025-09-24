const whitelists = ["http://localhost:5174", "http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelists.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};

module.exports = corsOptions;
