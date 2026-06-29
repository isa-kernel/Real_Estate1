import "../../styles/why-choose-us.css";
import {
  FaHome,
  FaHandshake,
  FaMapMarkerAlt,
  FaShieldAlt
} from "react-icons/fa";

function WhyChooseUs() {

  const features = [
    {
      icon: <FaHome />,
      title: "Wide Property Selection",
      description:
        "Browse quality homes, apartments, commercial spaces, and land carefully selected to meet different budgets and lifestyles."
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Professionals",
      description:
        "Our experienced team provides honest guidance and personalized support throughout your property journey."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Locations",
      description:
        "Discover properties in strategic and fast-growing locations with excellent investment potential."
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Process",
      description:
        "We believe in clear communication, fair pricing, and a smooth buying experience from start to finish."
    }
  ];

  return (
    <section className="why-choose">

      <div className="section-title">

        <span>WHY CHOOSE US</span>

        <h2>Your Trusted Real Estate Partner</h2>

        <p>
          We are committed to helping you find the right property through
          professional service, transparency, and local market expertise.
        </p>

      </div>

      <div className="why-grid">

        {features.map((feature, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">

              {feature.icon}

            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );

}

export default WhyChooseUs;