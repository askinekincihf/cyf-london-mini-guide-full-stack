const express = require("express");
const router = express.Router();
const db = require("../data/index.js");

router.get("/:city", (req, res) => {
  console.log(req.params.city);
  if (Object.keys(db).includes(req.params.city)) {
    res.json(db[req.params.city]);
  } else {
    res.status(404).send("Not found, please enter valid city");
  }
});

module.exports = router;
