const express = require("express");
const Thoughts = require("../models/thoughts.model");
const router = new express.Router();

//Grabbing everyone who thought about Viv
router.get("/", async(req, res) => {
    const ret = await Thoughts.find().limit(100).sort({$natural:-1});
    if(!ret) {
        return res.send("0");
    }
    res.send(ret);
});

//When someone thinks about Viv, push that to db
router.post("/", async (req, res) => {
    let time = Date.now();
    const ret = new Thoughts({name: req.body.name, time: time});
    await ret.save();
    res.status(200).send(ret.time);
});

module.exports = router;