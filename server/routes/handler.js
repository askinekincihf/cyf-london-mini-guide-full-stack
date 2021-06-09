// const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Harrow = require("../data/Harrow.json");
const Heathrow = require("../data/Heathrow.json");
const Stratford = require("../data/Stratford.json");

router.get("/harrow", (request, response) => {
    response.json(Harrow)
});

router.get("/heathrow", (request, response) => {
    response.json(Heathrow)
});

router.get("/stratford", (request, response) => {
    response.json(Stratford)
});

module.exports = router;