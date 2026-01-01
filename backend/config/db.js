import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect("mongodb+srv://sr8295679_db_user:resume123@cluster0.zskp4fj.mongodb.net/RESUME")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
}