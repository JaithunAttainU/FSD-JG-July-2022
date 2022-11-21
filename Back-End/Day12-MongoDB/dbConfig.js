const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb+srv://jaithun:12345@attainu.q1j9u.mongodb.net/?retryWrites=true&w=majority'
const dbName = 'BookMyShow'

async function initDB(collectionName) {
  const client = new MongoClient(MONGO_URL)

  // 1) Connect
  // 2) Db Name
  // 3) Collection Name
  try {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    console.log("Successfully Connected to DB")

    return collection
  } catch (err) {
    console.log("Error Connection to DB")
  }

}

module.exports = {
  initDB
}