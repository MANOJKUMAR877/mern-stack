const { MongoClient } = require("mongodb");
const express = require("express");
let db;

const app = express();
app.use(express.static("public"));
app.get("/", async (req, res) => {
  const allAnimals = await db.collection("animals").find().toArray();
  console.log(allAnimals);
  res.send("Welcome to home");
});
app.get("/admin", (req, res) => {
  res.send("Welcome to admin");
});

async function start() {
  const client = new MongoClient("mongodb://localhost:27017/AmazingMernApp");

  await client.connect();
  db = client.db();
}
start();
app.listen(3000);
