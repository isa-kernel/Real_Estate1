import { Link } from "react-router-dom";
import "../../styles/services-preview.css";
import {
  FaHome,
  FaMapMarkedAlt,
  FaBuilding,
  FaTools,
  FaChartLine,
  FaHandshake
} from "react-icons/fa";

function ServicesPreview() {

  const services = [
    {
      icon: <FaHome />,
      title: "Property Sales",
      description: "Find residential and commercial properties tailored to your needs."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Land Sales",
      description: "Explore prime land opportunities for residential and investment purposes."
    },
    {
      icon: <FaBuilding />,
      title: "Property Rentals",
      description: "Browse quality rental properties in desirable locations."
    },
    {
      icon: <FaTools />,
      title: "Property Management",
      description: "Professional management solutions for landlords and investors."
    },
    {
      icon: <FaChartLine />,
      title: "Investment Advice",
      description: "Receive expert guidance on making smart real estate investments."
    },
    {
      icon: <FaHandshake />,
      title: "Client Support",
      description: "Friendly assistance before, during, and after every transaction."
    }
  ];

  return (
    <section className="services-preview">

      <div className="section-title">

        <span>OUR SERVICES</span>

        <h2>Professional Real Estate Solutions</h2>

        <p>
          We provide reliable real estate services designed to make buying,
          selling, renting, and investing simple and stress-free.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

      <div className="services-btn">

        <Link to="/services">
          Explore All Services →
        </Link>

      </div>

    </section>
  );

}

export default ServicesPreview;