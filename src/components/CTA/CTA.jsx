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

    const phoneNumber = "918148329325";

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
          <span>Mon - Sun : 9 AM - 9 PM</span>
        </div>

        <div className="card">
          <div className="icon blue">✉️</div>
          <h4>Email Us</h4>
          <p>travel@jovaholidays.com</p>
          <span>We reply within an hour</span>
        </div>

        <div className="card">
          <div className="icon orange">📍</div>
          <h4>Visit Us</h4>
          <p>Chennai, India</p>
          <span>Serving Travelers Worldwide</span>
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
        <form className="contact-form" onSubmit={handleSubmit}>

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
              placeholder="+91 1234567890"
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
              placeholder="your@email.com"
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