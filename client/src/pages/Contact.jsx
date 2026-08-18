// pages/Contact.jsx
import { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import contactBanner from "../assets/banners/contact.jpg";
import API from "../services/api";
import agency from "../config/agency";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    // FaArrowUpRightFromSquare,
    FaPaperPlane,
} from "react-icons/fa";

import "../styles/contact/contact.css";

const initialState = {
    name: "",
    email: "",
    phone: "",
    subject: "Buying a property",
    message: "",
};

function Contact() {
    const [ formData, setFormData ] = useState(initialState);
    const [ loading, setLoading ] = useState(false);
    const [ status, setStatus ] = useState("");

    const contactOptions = [
        {
            icon: <FaPhoneAlt />,
            title: "Call us",
            text: agency.phone,
            href: `tel:${agency.phone}`,
            external: false,
        },
        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            text: "Chat with our team",
            href: `https://wa.me/${agency.whatsapp}`,
            external: true,
        },
        {
            icon: <FaEnvelope />,
            title: "Email us",
            text: agency.email,
            href: `mailto:${agency.email}`,
            external: false,
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit us",
            text: agency.address,
            href: agency.googleMaps,
            external: true,
        },
    ];

    const handleChange = ({ target: { name, value } }) => {
        setFormData((current) => ({ ...current, [ name ]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            await API.post("/inquiries", {
                ...formData,
                source: "contact",
            });

            setFormData(initialState);
            setStatus("success");
        } catch (error) {
            console.error("Contact form submission failed:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <PageBanner
                title="Let's talk about your next move."
                subtitle="Questions, property plans, or just starting to explore—we are here to help."
                background={contactBanner}
                breadcrumb={[ { label: "Contact" } ]}
            />

            <main className="contact-page">
                <section className="contact-welcome">
                    <div>
                        <p className="contact-eyebrow">GET IN TOUCH</p>
                        <h1>A real conversation is a good place to start.</h1>
                    </div>

                    <p>
                        Tell us what you are looking for and where you are in your property
                        journey. Our team will point you toward a clear next step.
                    </p>
                </section>

                <section className="contact-layout">
                    <aside className="contact-details">
                        <div className="contact-details-heading">
                            <p className="contact-eyebrow">CONTACT OPTIONS</p>
                            <h2>Choose the easiest way to reach us.</h2>
                        </div>

                        <div className="contact-options">
                            {contactOptions.map((option) => (
                                <a
                                    href={option.href}
                                    key={option.title}
                                    className="contact-option"
                                    target={option.external ? "_blank" : undefined}
                                    rel={option.external ? "noopener noreferrer" : undefined}
                                >
                                    <div className="contact-option-icon">{option.icon}</div>

                                    <div>
                                        <strong>{option.title}</strong>
                                        <span>{option.text}</span>
                                    </div>

                                    {/* {option.external && <FaArrowUpRightFromSquare />} */}
                                </a>
                            ))}
                        </div>

                        <div className="contact-note">
                            <strong>Prefer to speak first?</strong>
                            <p>
                                Call or send us a WhatsApp message for the quickest response.
                            </p>
                        </div>
                    </aside>

                    <section className="contact-form-wrap" aria-labelledby="contact-form-title">
                        <p className="contact-eyebrow">SEND A MESSAGE</p>
                        <h2 id="contact-form-title">How can we help?</h2>
                        <p className="form-intro">
                            Complete the short form and we will get back to you as soon as we can.
                        </p>

                        <form className="contact-form-new" onSubmit={handleSubmit}>
                            <div className="contact-form-grid">
                                <label>
                                    Your name
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Jane Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                        required
                                    />
                                </label>

                                <label>
                                    Email address
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="jane@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        required
                                    />
                                </label>

                                <label>
                                    Phone number <span>(optional)</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+254..."
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="tel"
                                    />
                                </label>

                                <label>
                                    I am interested in
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>Buying a property</option>
                                        <option>Renting a property</option>
                                        <option>Land opportunities</option>
                                        <option>Property management</option>
                                        <option>Investment advice</option>
                                        <option>Something else</option>
                                    </select>
                                </label>
                            </div>

                            <label>
                                Tell us a little more
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="What kind of property are you looking for?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </label>

                            <button type="submit" disabled={loading}>
                                {loading ? "Sending your message..." : "Send message"}
                                {!loading && <FaPaperPlane />}
                            </button>

                            {status === "success" && (
                                <p className="form-status success" role="status">
                                    Thanks—your message is on its way. We will be in touch soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="form-status error" role="alert">
                                    We could not send that message. Please try again or contact us directly.
                                </p>
                            )}
                        </form>
                    </section>
                </section>
            </main>
        </>
    );
}

export default Contact;