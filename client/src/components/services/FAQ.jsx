import { useState } from "react";
import "../../styles/services/faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {

    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [

        {
            question: "How do I schedule a property viewing?",
            answer:
                "Simply submit a booking request through the property details page or contact our team directly. We'll arrange a convenient viewing time for you."
        },

        {
            question: "Do you assist first-time home buyers?",
            answer:
                "Yes. We guide first-time buyers through property selection, financing options, documentation, and the purchasing process."
        },

        {
            question: "Can I list my property with your agency?",
            answer:
                "Absolutely. We help property owners market residential, commercial, and land listings to qualified buyers and tenants."
        },

        {
            question: "Do you provide property management services?",
            answer:
                "Yes. Our property management services include tenant management, rent collection, property maintenance coordination, and regular reporting."
        },

        {
            question: "How can I contact your team?",
            answer:
                "You can reach us through our Contact page, WhatsApp, phone, email, or by submitting an inquiry form on the website."
        }

    ];

    const toggleFAQ = (index) => {

        setActiveIndex(activeIndex === index ? -1 : index);

    };

    return (

        <section className="faq-section">

            <div className="section-title">

                <span>FREQUENTLY ASKED QUESTIONS</span>

                <h2>We're Here to Answer Your Questions</h2>

                <p>
                    Find answers to some of the most common questions about our
                    services and how we can help you with your real estate needs.
                </p>

            </div>

            <div className="faq-container">

                {faqs.map((faq, index) => (

                    <div
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                    >

                        <button
                          className="faq-question"
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={activeIndex === index}
                          aria-controls={`faq-${index}`}
                      >

                            <span>{faq.question}</span>

                            {
                                activeIndex === index
                                    ? <FaChevronUp />
                                    : <FaChevronDown />
                            }

                        </button>

                        <div
    id={`faq-${index}`}
    className="faq-answer"
>

                            <p>{faq.answer}</p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default FAQ;