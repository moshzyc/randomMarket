import express from "express"
import { PORT } from "./secrets/env.js"
import appRouter from "./routes/app.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import "./db/mongoConnect.js"

const app = express()
const allowedOrigins = [
  "http://localhost:5173", // הפיתוח המקומי
  "https://ramdomarket.netlify.app", // הדומיין של האתר
]
app.use(express.json())
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true) // אפשר את הבקשה
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true, // אפשר שליחה של עוגיות
  })
)

app.use(cookieParser())
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.use(appRouter)
app.listen(PORT, () => {
  console.log("server is running on port " + PORT)
})
