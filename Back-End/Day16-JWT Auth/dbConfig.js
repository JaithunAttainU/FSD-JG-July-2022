const mongoose = require("mongoose");

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'BookMyShow' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error Connecting to DB")
    process.exit()
  }
}
module.exports = {
  initDB
}