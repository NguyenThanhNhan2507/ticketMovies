const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    maLichChieu: {
      type: Number,
      trim: true,
    },
    danhSachVe: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", userSchema);
