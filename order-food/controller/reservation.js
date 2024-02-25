import ErrorHandle from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { userName, email, phone, date, time } = req.body;

  if (!userName || !email || !phone || !time || !date) {
    return next(new ErrorHandle("信息验证失败，请核验输入信息！", 400));
  }

  try {
    await Reservation.create({ userName, email, phone, time, date });
    res.status(200).json({
      success: true,
      message: "预定成功！",
    });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );

      return next(new ErrorHandle(validationErrors.join(" , "), 400));
    }

    return next(error);
  }
};
