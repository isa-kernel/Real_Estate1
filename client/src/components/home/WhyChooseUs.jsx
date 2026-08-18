import "../../styles/why-choose-us.css";
import { FaHome, FaHandshake, FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaHome />,
      title: "Wide Property Selection",
      description: "Homes, apartments, land, and commercial spaces for every budget."
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Professionals",
      description: "Guidance and support from an experienced, honest team."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Locations",
      description: "Properties in strategic, high‑growth areas."
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Process",
      description: "Clear communication, fair pricing, smooth transactions."
    }
  ];

  return (
    <section className="why-choose">
      <div className="section-title">
        <span>WHY CHOOSE US</span>
        <h2>Your Trusted Real Estate Partner</h2>
        <p>We help you find the right property with transparency and expertise.</p>
      </div>

      <div className="why-scroll">
        {features.map((feature, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
