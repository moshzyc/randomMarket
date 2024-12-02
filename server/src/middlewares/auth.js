import jwt from "jsonwebtoken"
import AppError from "../utils/appError.js"
import { secretKey } from "../secrets/env.js"

const auth = async (req, res, next) => {
  try {
    const cookie = req.cookies.access_token || ""
    const token = cookie.split(" ")[1]
    if (!token) return next(new AppError("unauthorized", 401))
    const decodeToken = jwt.verify(token, secretKey)
    req._id = decodeToken._id
    next()
  } catch (error) {
    return next(new AppError("unauthorized", 401, error))
  }
}

const autAdmin = async (req, res, next) => {
  try {
    const cookie = req.cookies.access_token || ""
    const token = cookie.split(" ")[1]
    if (!token) return next(new AppError("unauthorized", 401))
    console.log("lala")
    const decoded = jwt.verify(token, secretKey)
    // console.log(decoded); // הדפסת תוכן ה-Token
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only" })
    }
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}

export { auth, autAdmin }
