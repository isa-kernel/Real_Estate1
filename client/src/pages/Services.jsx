// pages/Services.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/common/PageBanner";
import serviceBanner from "../assets/banners/services.jpg";

import {
    FaArrowRight,
    FaHome,
    FaBuilding,
    FaMapMarkedAlt,
    FaTools,
    FaChartLine,
    FaClipboardCheck,
    FaComments,
    FaSearch,
    FaFileSignature,
} from "react-icons/fa";

import "../styles/services/services.css";

const services = [
    {
        label: "Buy",
        icon: <FaHome />,
        title: "Find a property worth coming home to.",
        text: "We help you narrow down verified residential and commercial opportunities that fit your budget, lifestyle, and long-term goals.",
        points: [ "Curated property options", "Viewing coordination", "Negotiation and paperwork support" ],
        tone: "forest",
    },
    {
        label: "Rent",
        icon: <FaBuilding />,
        title: "Rent with clarity and confidence.",
        text: "Discover rental spaces that suit how you live or work, with practical support from viewing to move-in.",
        points: [ "Residential and commercial rentals", "Clear property details", "Responsive support throughout" ],
        tone: "blue",
    },
    {
        label: "Land",
        icon: <FaMapMarkedAlt />,
        title: "Choose land with the future in mind.",
        text: "Explore land opportunities in promising locations, backed by careful guidance for a more confident investment.",
        points: [ "Residential and commercial land", "Location-focused guidance", "Investment-minded advice" ],
        tone: "earth",
    },
    {
        label: "Manage",
        icon: <FaTools />,
        title: "Property ownership, without the daily stress.",
        text: "We help owners protect value, simplify operations, and give tenants a better rental experience.",
        points: [ "Tenant and property coordination", "Ongoing property care", "Owner-focused reporting" ],
        tone: "plum",
    },
];

const process = [
    {
        icon: <FaComments />,
        title: "Tell us your goal",
        text: "Share your budget, timeline, and the kind of property you have in mind.",
    },
    {
        icon: <FaSearch />,
        title: "See better options",
        text: "We shortlist suitable opportunities and arrange viewings around your schedule.",
    },
    {
        icon: <FaFileSignature />,
        title: "Move forward clearly",
        text: "Get support with negotiation, documentation, and the next practical steps.",
    },
];

const faqs = [
    {
        question: "Can you help if I am buying property for the first time?",
        answer:
            "Absolutely. We explain each stage in plain language and help you make decisions at a pace that feels comfortable.",
    },
    {
        question: "Do you offer help with property investment?",
        answer:
            "Yes. We can help you compare opportunities, understand locations, and identify options aligned with your investment goals.",
    },
    {
        question: "Can I book a viewing before making a decision?",
        answer:
            "Yes. Viewings are an important part of the process. Contact us with the property you are interested in and your preferred time.",
    },
    {
        question: "Do you manage properties for landlords?",
        answer:
            "Yes. Our property management service is designed to reduce the day-to-day work of ownership while keeping your property well cared for.",
    },
];

function Services() {
    const [ activeService, setActiveService ] = useState(0);
    const service = services[ activeService ];

    return (
        <>
            <PageBanner
                title="Property support that moves with you."
                subtitle="Clear guidance for buying, renting, investing, and managing property."
                background={serviceBanner}
                breadcrumb={[ { label: "Services" } ]}
            />

            <main className="services-page">
                <section className="services-intro-new">
                    <p className="services-eyebrow">HOW WE HELP</p>
                    <h1>Real estate services built around your next move.</h1>
                    <p>
                        Whether you are searching for a home, growing an investment
                        portfolio, or managing a property, we bring the local knowledge and
                        practical support to make progress feel easier.
                    </p>
                </section>

                <section className="service-explorer" aria-label="Our services">
                    <div className="service-tabs" role="tablist">
                        {services.map((item, index) => (
                            <button
                                type="button"
                                key={item.label}
                                role="tab"
                                aria-selected={activeService === index}
                                className={activeService === index ? "active" : ""}
                                onClick={() => setActiveService(index)}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>

                    <article className={`service-feature ${service.tone}`}>
                        <div className="feature-icon">{service.icon}</div>

                        <div className="feature-content">
                            <p className="services-eyebrow">{service.label} WITH CONFIDENCE</p>
                            <h2>{service.title}</h2>
                            <p>{service.text}</p>

                            <ul>
                                {service.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>

                            <Link to="/contact" className="service-link">
                                Speak to an advisor <FaArrowRight />
                            </Link>
                        </div>
                    </article>
                </section>

                <section className="extra-services">
                    <div>
                        <p className="services-eyebrow">MORE THAN LISTINGS</p>
                        <h2>Advice for the decisions around the property too.</h2>
                    </div>

                    <div className="extra-service-list">
                        <div>
                            <FaChartLine />
                            <span>
                                <strong>Investment consultation</strong>
                                Guidance to help you evaluate opportunities with a long-term view.
                            </span>
                        </div>

                        <div>
                            <FaClipboardCheck />
                            <span>
                                <strong>Property valuation</strong>
                                Clear assessments to help you price, buy, or invest wisely.
                            </span>
                        </div>
                    </div>
                </section>

                <section className="services-process">
                    <div className="process-heading">
                        <p className="services-eyebrow">A SIMPLE PROCESS</p>
                        <h2>Less guesswork. More forward movement.</h2>
                    </div>

                    <div className="process-list">
                        {process.map((step, index) => (
                            <article className="process-step" key={step.title}>
                                <span>0{index + 1}</span>
                                <div className="process-step-icon">{step.icon}</div>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="services-faq">
                    <div className="faq-heading">
                        <p className="services-eyebrow">COMMON QUESTIONS</p>
                        <h2>Helpful answers, before you get started.</h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq) => (
                            <details key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="services-cta">
                    <div>
                        <p className="services-eyebrow">READY WHEN YOU ARE</p>
                        <h2>Let’s find the right next step.</h2>
                    </div>

                    <Link to="/contact">
                        Contact our team <FaArrowRight />
                    </Link>
                </section>
            </main>
        </>
    );
}

export default Services;