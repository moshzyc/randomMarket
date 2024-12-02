import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      // unique: true,
      // required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    birthDate: Date,
    otp: String,
  },
  { timestamps: true }
)
export const User = mongoose.model("users", userSchema, "us2")
