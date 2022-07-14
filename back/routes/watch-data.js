const express = require("express");
const router = express.Router();
const watchData = require("../models/watch-data-model");

const mongoose = require("mongoose");

router.get("/getData", async (req, res) => {
  try {
    const data = await watchData.find({});
    console.log(data);
    res.send(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/post", async (req, res) => {
  try {
    const data = new watchData({
      heartRate: req.body.heartRate,
      bloodPressure: req.body.bloodPressure,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
    const newData = await data.save();

    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
