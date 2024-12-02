import express from "express"
import { PORT } from "./secrets/env.js"
import appRouter from "./routes/app.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import "./db/mongoConnect.js"

const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true },{ origin: "https://ramdomarket.netlify.app", credentials: true }))
// app.use(cors({ origin: "https://ramdomarket.netlify.app", credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use((req, _, next) => {
  console.log(req.method, req.originalUrl)
  next()
})

app.use(appRouter)
app.listen(PORT, () => {
  console.log("server is running on port " + PORT)
})
