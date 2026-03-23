import { useState } from "react";
import "./CTA.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919495123363";

    const message = `Hello JOVA HOLIDAYS,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // ✅ Show success message first
    setSuccess(true);

    // ✅ Open WhatsApp after slight delay (better UX)
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1200);

    // ✅ Optional: reset form
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      
      {/* HEADER */}
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          We’ll create high-quality linkable content and build at least 40
          high-authority links to each asset.
        </p>
      </div>

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="success-message">
          ✅ Message sent! Our team will respond ASAP.
        </div>
      )}

      {/* MAIN CARD */}
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            We’ll help you plan your perfect travel experience.
          </p>

          <div className="info-item">📞 +91 81483 29325</div>
          <div className="info-item">📞 +91 81483 29325</div>
          <div className="info-item">✉️ support@jovaholidays.com</div>
          <div className="info-item">📍 India</div>
        </div>

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="row">
            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Trangely"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="hello@nurency.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Your Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 9876543210"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write here your message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}