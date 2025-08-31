import mongoose from "mongoose";

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("✅ DB connected");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message); // <-- actual error message milega
    process.exit(1); // optional: server band kar do agar DB connect na ho
  }
};
