// pages/About.jsx
import { Link } from "react-router-dom";
import PageBanner from "../components/common/PageBanner";
import aboutBanner from "../assets/banners/about.jpg";
import agencyImage from "../assets/banners/agency.jpg";

import {
    FaArrowRight,
    FaCheck,
    FaCompass,
    FaHandshake,
    FaShieldAlt,
    FaStar,
    FaSearch,
    FaCalendarCheck,
    FaKey,
} from "react-icons/fa";

import "../styles/about/about.css";

const values = [
    {
        icon: <FaShieldAlt />,
        title: "Clear & honest",
        text: "Straightforward guidance, verified information, and no unnecessary surprises.",
    },
    {
        icon: <FaHandshake />,
        title: "Personal service",
        text: "Your goals shape every recommendation we make—not a one-size-fits-all process.",
    },
    {
        icon: <FaStar />,
        title: "High standards",
        text: "We pay attention to the details that make a property decision feel right.",
    },
];

const journey = [
    { icon: <FaSearch />, title: "Understand", text: "We listen to what matters most." },
    { icon: <FaCalendarCheck />, title: "Explore", text: "View options worth your time." },
    { icon: <FaKey />, title: "Move forward", text: "Make your decision with confidence." },
];

function About() {
    return (
        <>
            <PageBanner
                title="Real estate, with your goals at the centre."
                subtitle="Thoughtful guidance for buyers, renters, sellers, and investors."
                background={aboutBanner}
                breadcrumb={[ { label: "About" } ]}
            />

            <main>
                <section className="about-intro">
                    <div className="about-photo">
                        <img
                            src={agencyImage}
                            alt="A member of our real estate team assisting a client"
                        />
                        <div className="photo-note">
                            <FaCompass />
                            <span>Local knowledge.<br />Real guidance.</span>
                        </div>
                    </div>

                    <div className="about-copy">
                        <p className="about-eyebrow">WHO WE ARE</p>
                        <h2>We make property decisions feel less overwhelming.</h2>

                        <p className="about-lead">
                            Finding the right property is more than comparing prices and
                            locations. It is about choosing a place—and an opportunity—that
                            fits where you are going.
                        </p>

                        <p>
                            Our team brings local market understanding, honest advice, and
                            hands-on support to every step of your journey. Whether this is
                            your first home, your next investment, or a property to rent, we
                            help you move with clarity.
                        </p>

                        <div className="about-promise">
                            {[
                                "Verified property opportunities",
                                "Open communication from day one",
                                "Support before, during, and after your decision",
                            ].map((item) => (
                                <div key={item}>
                                    <FaCheck />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="about-purpose">
                    <div className="purpose-heading">
                        <p className="about-eyebrow">OUR PURPOSE</p>
                        <h2>Better property experiences, built on trust.</h2>
                    </div>

                    <div className="purpose-statement">
                        <div>
                            <span>OUR MISSION</span>
                            <h3>To help people make confident property decisions.</h3>
                        </div>

                        <div>
                            <span>OUR VISION</span>
                            <p>
                                To be the real estate partner people recommend because we make
                                every interaction clear, thoughtful, and genuinely useful.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="about-section-heading">
                        <p className="about-eyebrow">WHAT GUIDES US</p>
                        <h2>The values you will feel in every interaction.</h2>
                    </div>

                    <div className="values-row">
                        {values.map((value) => (
                            <article className="about-value" key={value.title}>
                                <div className="value-mark">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="about-journey">
                    <div>
                        <p className="about-eyebrow">THE EXPERIENCE</p>
                        <h2>A simpler way to find your next place.</h2>
                    </div>

                    <div className="journey-list">
                        {journey.map((step, index) => (
                            <div className="about-step" key={step.title}>
                                <span className="step-number">0{index + 1}</span>
                                <div className="step-icon">{step.icon}</div>
                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-cta">
                    <div>
                        <p className="about-eyebrow">LET'S TALK PROPERTY</p>
                        <h2>Tell us what your next move looks like.</h2>
                        <p>
                            We are ready when you are—whether you are just exploring or ready
                            to take the next step.
                        </p>
                    </div>

                    <Link to="/contact" className="about-cta-link">
                        Speak with our team <FaArrowRight />
                    </Link>
                </section>
            </main>
        </>
    );
}

export default About;