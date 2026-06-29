import { useState } from "react";
import "../../styles/contact/contact-form.css";
import API from "../../services/api"; // ✅ use the configured Axios instance

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // ✅ use API instead of axios directly
      await API.post("/inquiries", {
        ...formData,
        source: "contact"
      });

      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="section-title">
        <span>SEND US A MESSAGE</span>
        <h2>Let's Start the Conversation</h2>
        <p>
          Fill in the form below and our team will get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="success-message">Your message has been sent successfully.</p>
        )}

        {status === "error" && (
          <p className="error-message">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
