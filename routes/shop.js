const express = require("express");
const router = express.Router();
const path = require("path");

const adminData = require("./admin");
const getProducts = require("../controller/products");
router.get("/", getProducts.getProducts);

module.exports = router;
