import { useState } from "react";
import "./CTA.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

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

    const phoneNumber = "919363311085";

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
        <div className="icon green">
        <FontAwesomeIcon icon={faPhone} />
        </div>
          <h4>Call Us</h4>
          <p>+91 9363311085</p>
        </div>

        <div className="card">
          <div className="icon blue">
    <FontAwesomeIcon icon={faEnvelope} />
  </div>
          <h4>Email Us</h4>
          <p>travel@jovaholidays.com</p>
        </div>

        <div className="card">
        <div className="icon orange">
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
  </svg>
</div>
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