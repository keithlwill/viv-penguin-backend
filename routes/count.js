const express = require("express");
const Count = require("../models/count.model");
const router = new express.Router();

//Grab the total number of thoughts so far
router.get("/", async(req, res) => {
    const ret = await Count.findOne();
    if(!ret) {
        return res.send("0");
    }
    res.send(ret.count.toString());
})

//Update total number of thoughts so far
router.post("/", async (req, res) => {
    let count = await Count.findOne();
    if(count == null) {
        count = new Count({count: 0});
    }

    count.count = count.count + 1;

    try {
        await count.save();
        res.status(200).send(count.count.toString());
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;