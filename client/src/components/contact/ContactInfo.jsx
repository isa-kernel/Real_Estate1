import "../../styles/contact/contact-info.css";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp
} from "react-icons/fa";

import agency from "../../config/agency";

function ContactInfo() {

    const cards = [

        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Our Office",
            value: agency.address,
            link: agency.googleMaps
        },

        {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            value: agency.phone,
            link: `tel:${agency.phone}`
        },

        {
            icon: <FaEnvelope />,
            title: "Email Us",
            value: agency.email,
            link: `mailto:${agency.email}`
        },

        {
            icon: <FaWhatsapp />,
            title: "WhatsApp",
            value: "Chat with us",
            link: `https://wa.me/${agency.whatsapp}`
        }

    ];

    return (

        <section className="contact-info">

            <div className="contact-grid">

                {cards.map((card, index) => (

                    <a
                        key={index}
                        href={card.link}
                        className="contact-card"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div className="contact-icon">

                            {card.icon}

                        </div>

                        <h3>{card.title}</h3>

                        <p>{card.value}</p>

                    </a>

                ))}

            </div>

        </section>

    );

}

export default ContactInfo;