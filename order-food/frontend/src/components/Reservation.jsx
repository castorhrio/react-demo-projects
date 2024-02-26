import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Reservation = () => {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:3000/api/v1/restaurant/send",
        { userName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      toast.success(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      navigate("/success");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>

        <div className="banner">
          <div className="reservation_form_box">
            <h1>预约</h1>
            <p>遇到问题，请电话联系</p>
            <form action="">
              <div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="预定日期"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="预定时间"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="联系电话"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="邮箱地址"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleReservation}>
                预约
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
