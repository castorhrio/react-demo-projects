import mongoose from "mongoose";
import validator from "validator";

//预定表
const reservationSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: [3, "用户名至少包含三个字符！"],
    maxLength: [30, "用户名长度不能超过30个字符！"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "邮件格式错误！"],
  },
  phone: {
    type: String,
    required: true,
    validate: [validator.isMobilePhone, "电话格式错误！"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
