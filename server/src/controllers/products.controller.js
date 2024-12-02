import mongoose from "mongoose"
import { Product } from "../models/Product.model.js"
import { Category } from "../models/Category.model.js"
const productsCtrl = {
  async addProduct(req, res) {
    try {
      const productData = req.body

      // בדיקה אם הקטגוריה כבר קיימת
      let category = await Category.findOne({ category: productData.category })
      if (!category) {
        // אם הקטגוריה לא קיימת, ליצור חדשה ולשמור אותה
        const newCategory = new Category({ category: productData.category }) // שם השדה תואם לסכמה
        category = await newCategory.save()
      }

      // יצירת מוצר חדש ושמירתו
      const newProduct = new Product(productData)
      const savedProduct = await newProduct.save()

      res.status(201).json({
        message: "Product created successfully",
        product: savedProduct,
        category: category, // מחזירים גם את הקטגוריה שנוצרה או הייתה קיימת
      })
    } catch (err) {
      console.error("Error saving product:", err)

      res.status(400).json({
        error: "Failed to create product",
        details: err.message,
      })
    }
  },
  async getProdacts(req, res) {
    try {
      const Products = await Product.find()
      res.status(200).json(Products)
      //  console.log(Products)
    } catch (error) {
      console.log(error)
    }
  },
  async getCategories(req, res) {
    try {
      const categories = await Category.find()
      res.status(200).json(categories)
      //  console.log(categories)
    } catch (error) {
      console.log(error)
    }
  },
}
export { productsCtrl }
