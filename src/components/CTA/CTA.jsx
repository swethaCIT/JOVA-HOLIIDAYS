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

    const phoneNumber = "918903814322";

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
          Have questions? We'd love to hear from you. Send us a message and we'll
          respond as soon as possible.
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className="contact-cards">

        <div className="card">
          <div className="icon green">📞</div>
          <h4>Call Us</h4>
          <p>+91 9363311085</p>
        </div>

        <div className="card">
          <div className="icon blue">✉️</div>
          <h4>Email Us</h4>
          <p>travel@jovaholidays.com</p>
        </div>

        <div className="card">
          <div className="icon orange">📍</div>
          <h4>Visit Us</h4>
          <p>Chennai, India</p>
        </div>

      </div>

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="success-message">
          ✅ Message sent! Our team will respond ASAP.
        </div>
      )}

      {/* FORM CARD */}
      <div className="form-wrapper">
        <form id="cta-form" className="contact-form" onSubmit={handleSubmit}>

          <h3>Send Us a Message</h3>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Include country code (e.g., +91)"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="For booking confirmation & updates"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Which destination are you planning to visit? Any specific requirements? Let us know!"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">✈ Send Message</button>
        </form>
      </div>

    </section>
  );
}