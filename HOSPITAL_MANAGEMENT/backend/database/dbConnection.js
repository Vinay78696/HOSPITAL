// const mongoose = require('mongoose');
import mongoose from "mongoose";
const uri = "mongodb+srv://Vinay:Vinay@cluster0.5czj8is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"/*&w=majority&appName=Cluster0*/;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const dbConnection = () => {
  mongoose
    .connect(uri, {
      dbName: "HOSPITAL_M",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
  };
  // try {
  //   // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  //   await mongoose.connect(uri, clientOptions);
  //   await mongoose.connection.db.admin().command({ ping: 1 });
  //   console.log("Pinged your deployment. You successfully connected to MongoDB!");
  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await mongoose.disconnect();
  // }


// async function run() {
  
// }
// run().catch(console.dir);
