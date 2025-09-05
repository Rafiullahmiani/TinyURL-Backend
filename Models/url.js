import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
});

export const URLs = mongoose.model("urls", URLSchema);

