const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    time: {
        type: Date, 
        default: Date.now 
    },
});

const Thought = mongoose.model("Thoughts", thoughtSchema);
module.exports = Thought;