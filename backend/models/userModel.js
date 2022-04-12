const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
  {
    taiKhoan: {
      type: String,
      trim: true,
    },
    matKhau: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    hoTen: {
      type: String,
      trim: true,
    },
    soDt: {
      type: String,
      trim: true,
    },
    maLoaiNguoiDung: {
      type: String,
      trim: true,
      default: "KhachHang",
    },
    maNhom: {
      type: String,
      trim: true,
      default:'GP09'
    },
    thongTinDatVe:{
      type: Array,
      default: []
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema)