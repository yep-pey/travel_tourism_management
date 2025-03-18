const mongoose = require("mongoose");

const connectTODb = (err) => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Connected to Database."));
  if (err) console.log(`Error occured when connecting database. ${err}`);
};

module.exports = connectTODb;
