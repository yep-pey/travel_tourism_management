require("dotenv").config();
const express = require("express");
const connectTODb = require("./DB/mongDB");

const cors = require("cors");
const cookieParser = require("cookie-parser");

connectTODb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

//Server Connections
app.listen(PORT, (err) => {
  console.log(`The server is running at:${PORT}`);
  if (err) {
    console.log(`server running failed:${err}`);
  }
});
