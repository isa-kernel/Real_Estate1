// PropertyExperience.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMapMarkedAlt,
  FaBuilding,
  FaChartLine,
  FaSearch,
  FaCalendarCheck,
  FaKey,
  FaArrowRight,
} from "react-icons/fa";
import "../../styles/property-experience.css";

const services = [
  {
    label: "Buy",
    icon: <FaHome />,
    title: "Find a place that feels right",
    text: "Handpicked homes and commercial spaces matched to your budget, lifestyle, and plans.",
    color: "orange",
  },
  {
    label: "Land",
    icon: <FaMapMarkedAlt />,
    title: "Invest in the right location",
    text: "Explore verified land opportunities in growing areas with genuine long-term potential.",
    color: "green",
  },
  {
    label: "Rent",
    icon: <FaBuilding />,
    title: "Move in with confidence",
    text: "Quality rentals, clear details, and a team that makes your next move feel simple.",
    color: "blue",
  },
  {
    label: "Invest",
    icon: <FaChartLine />,
    title: "Make your money work harder",
    text: "Clear market guidance to help you choose property opportunities with confidence.",
    color: "purple",
  },
];

const steps = [
  { icon: <FaSearch />, title: "Discover", text: "Tell us what you need." },
  { icon: <FaCalendarCheck />, title: "View", text: "Book a convenient visit." },
  { icon: <FaKey />, title: "Move forward", text: "We handle the details." },
];

export default function PropertyExperience() {
  const [ activeService, setActiveService ] = useState(0);
  const service = services[ activeService ];

  return (
    <section className="property-experience">
      {/* Heading */}
      <div className="experience-heading">
        <p className="eyebrow">PROPERTY, MADE PERSONAL</p>
        <h2>Everything you need for your next move.</h2>
        <p>
          From your first search to getting the keys, we make property decisions
          feel clear, secure, and exciting.
        </p>
      </div>

      {/* Service Tabs */}
      <div className="service-picker" role="tablist" aria-label="Property services">
        {services.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeService === index}
            className={activeService === index ? "active" : ""}
            onClick={() => setActiveService(index)}
            key={item.label}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Spotlight */}
      <article className={`service-spotlight ${service.color}`}>
        <div className="spotlight-icon">{service.icon}</div>
        <div>
          <p className="spotlight-label">{service.label} WITH US</p>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <Link to="/services" className="text-link">
            Explore {service.label.toLowerCase()} options <FaArrowRight />
          </Link>
        </div>
      </article>

      {/* Journey Steps */}
      <div className="journey">
        <div className="journey-copy">
          <p className="eyebrow">HOW IT WORKS</p>
          <h3>Your next property in three easy moments.</h3>
        </div>
        <div className="journey-steps">
          {steps.map((step, index) => (
            <div className="journey-step" key={step.title}>
              <span className="step-count">0{index + 1}</span>
              <div className="step-symbol">{step.icon}</div>
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Strip */}
      <div className="trust-strip" aria-label="Company achievements">
        <div><strong>500+</strong><span>properties</span></div>
        <div><strong>250+</strong><span>happy clients</span></div>
        <div><strong>10+</strong><span>years local expertise</span></div>
      </div>
    </section>
  );
}
