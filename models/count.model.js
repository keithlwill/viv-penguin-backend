const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  count: {
    type: Number, 
    require: true,
  },
});

const Count = mongoose.model("Count", countSchema);
module.exports = Count;