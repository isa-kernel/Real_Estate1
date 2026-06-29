import "../../styles/services/services-grid.css";
import {
  FaHome,
  FaBuilding,
  FaMapMarkedAlt,
  FaTools,
  FaChartLine,
  FaClipboardCheck,
  FaHandshake,
  FaHeadset
} from "react-icons/fa";

function ServicesGrid() {

  const services = [

    {
      icon: <FaHome />,
      title: "Property Sales",
      description:
        "Helping individuals and families find residential and commercial properties that suit their lifestyle, needs, and budget."
    },

    {
      icon: <FaBuilding />,
      title: "Property Rentals",
      description:
        "Browse quality rental properties with flexible options for individuals, families, and businesses."
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Land Sales",
      description:
        "Discover prime residential, agricultural, and commercial land opportunities in strategic locations."
    },

    {
      icon: <FaTools />,
      title: "Property Management",
      description:
        "Professional property management solutions designed to maximize value while reducing stress for property owners."
    },

    {
      icon: <FaChartLine />,
      title: "Investment Consultation",
      description:
        "Receive expert advice to help you identify high-potential real estate investment opportunities."
    },

    {
      icon: <FaClipboardCheck />,
      title: "Property Valuation",
      description:
        "Accurate property assessments that help buyers, sellers, and investors make informed decisions."
    },

    {
      icon: <FaHandshake />,
      title: "Buying & Selling Support",
      description:
        "From negotiations to paperwork, we guide you through every stage of the buying or selling process."
    },

    {
      icon: <FaHeadset />,
      title: "Dedicated Client Support",
      description:
        "Our team is always available to answer your questions and provide professional assistance whenever you need it."
    }

  ];

  return (

    <section className="services-grid-section">

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-item"
            key={index}
          >

            <div className="service-item-icon">

              {service.icon}

            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ServicesGrid;