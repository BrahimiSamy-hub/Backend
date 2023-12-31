const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userJwt = require("../middlewares/userJwt");

router.post("/", userJwt, productController.createProduct);
router.get("/", productController.getAllProducts);
router.put("/:id", userJwt, productController.updateProduct);
router.delete("/:id", userJwt, productController.deleteProduct);
router.get("/:id", productController.getOneProduct);

module.exports = router;
