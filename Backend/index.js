const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { json } = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Ki ra Coffee Khabi");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1e3hmt0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();

    const CoffeeCollection = client.db("coffeeDB").collection("coffees");

    //get all coffees

    app.get("/coffees", async (req, res) => {
      const data = await CoffeeCollection.find().toArray();
      res.send(data);
    });

    // create a coffee object in database
    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      const result = await CoffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    // Delete a coffee from database

    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await CoffeeCollection.deleteOne(query);
      res.send(result);
    });

    // Get individual coffee by id
    app.get("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const data = await CoffeeCollection.findOne(query);
      res.send(data);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run();

app.listen(port, () => {
  console.log(`Port Listen on ${port}`);
});
