const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")

//establish mongoDB connection lolz
require("./database/mongoose-setup");

const connection = mongoose.connection;

const countRouter = require("./routes/count");
const thoughtsRouter = require("./routes/thoughts");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  });

app.use("/count", countRouter);
app.use("/thoughts", thoughtsRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
  });