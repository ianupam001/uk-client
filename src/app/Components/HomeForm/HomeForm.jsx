"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import Image from "next/image";
export default function BookingForm() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Booking Request:%0A%0ADate: ${form.date}%0ATime: ${form.time}%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ACity: ${form.city}%0ARequirement: ${form.message}`;
    const whatsappURL = `https://wa.me/+447469641922?text=${encodeURIComponent(msg)}`;
    window.location.href = whatsappURL;
  };

  return (
     <section className="cs_gray_bg cs_bg_filed position-relative" data-src="assets/img/service_bg_1.jpg">
          <div className="cs_height_120 cs_height_lg_80"></div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
              <div className="cs_section_heading_left">
                <SectionTitle
                    SubTitle="Book Best Services"
                    Title="Make a Booking for Expert Car Service"
                ></SectionTitle>
              </div>
              <div className="cs_section_heading_right mb-0 wow fadeInDown">Regular tire rotation ensures even wear, extending the life of your tires and improving overall vehicle performance. If your car struggles to start or the lights dim when idling, it may be time to service or replace the battery. Schedule your appointment now and keep your car running at its best.</div>
            </div>
            </div>
    <div
  className="form-wrapper" style={{maxWidth: "700px",background: "#a5a5e99e",}}>

      <form className="booking-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        
        <div className="form-row">
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="Enter phone number" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" placeholder="Enter city" value={form.city} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row full-width">
          <div className="form-group" style={{ flex: "1 1 48%" }}>
            <label>Message</label>
            <textarea name="message" placeholder="Write your requirements..." value={form.message} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="form-row full-width">
          <button type="submit" className="submit-btn">Submit &amp; WhatsApp</button>
        </div>
      </form>
    </div>
    </section>
  );
}
