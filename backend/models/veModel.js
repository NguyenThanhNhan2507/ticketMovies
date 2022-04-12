const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    maGhe: {
      type: Number,
      trim: true,
    },
    giaVe: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ve", userSchema);
