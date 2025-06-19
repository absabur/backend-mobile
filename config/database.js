const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully");
    mongoose.connection.on("error", (err) => {
      console.error(`Database connection error: ${err.message}`);
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
  }
};

module.exports = connectDB;