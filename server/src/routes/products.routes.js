import express from "express"
import AppError from "../utils/appError.js"
import { productsCtrl } from "../controllers/products.controller.js"
import { autAdmin } from "../middlewares/auth.js"
const router = express.Router()

router.post("/", autAdmin, productsCtrl.addProduct)
router.get("/", productsCtrl.getProdacts)
router.get("/categories", productsCtrl.getCategories)

export default router
