const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    maCumRap: {
      type: String,
      trim: true,
    },
    tenCumRap: {
      type: String,
    },
    danhSachRap: [
      {
        maRap:{
            type:String
        },
        tenRap:{
            type: String
        }
      },
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CR", userSchema);
