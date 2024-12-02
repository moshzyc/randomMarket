import mongoose from "mongoose"
const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://cohen:Aa123456@cluster0.48kld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    console.log("db is connected")
  } catch (error) {
    console.log(error)
  }
}
// localhost:27017/
// "mongodb+srv://cohen:Aa123456@cluster0.48kld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
connectToDb()
