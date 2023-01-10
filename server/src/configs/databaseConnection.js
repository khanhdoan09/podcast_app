require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  connectDatabase,
};
