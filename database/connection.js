const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log("Database connected");
  } catch (error) {
    console.log("Database Connectivity Error", error);
    throw new Error(error);
  }
};
