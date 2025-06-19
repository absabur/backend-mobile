const app = require("./app.js");
const connectDB = require("./config/database.js");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  process.exit(1);
});


app.listen(process.env.PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    process.exit(1);
  }
});
