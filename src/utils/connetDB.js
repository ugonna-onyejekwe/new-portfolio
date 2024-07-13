import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return console.log("mongodb already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "comments",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
