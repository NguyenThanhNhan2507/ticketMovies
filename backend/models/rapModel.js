const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    maCumRap: {
      type: String,
      trim: true,
    },
    tenHeThongRap: {
      type: String,
    },
    logo: {
      type: String,
    },
    maHeThongRap: {
      type: String,
      trim: true,
      unique: true,
    },
    lstCumRap: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rap", userSchema);
