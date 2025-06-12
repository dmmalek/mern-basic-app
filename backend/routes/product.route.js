import express from "express";
import { getProduct, createProduct, deleteProduct, updatedProduct } from "../controllers/product.controller.js"

const router = express.Router();



router.put("/:id", updatedProduct)

router.get("/", getProduct)

router.post("/", createProduct)

router.delete("/:id", deleteProduct)

export default router;