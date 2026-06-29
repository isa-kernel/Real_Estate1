import "../../styles/about/core-values.css";
import {
  FaHandshake,
  FaShieldAlt,
  FaStar,
  FaHeart,
  FaLightbulb,
  FaUsers
} from "react-icons/fa";

function CoreValues() {

  const values = [

    {
      icon: <FaHandshake />,
      title: "Integrity",
      description:
        "We build lasting relationships through honesty, ethics, and accountability."
    },

    {
      icon: <FaShieldAlt />,
      title: "Transparency",
      description:
        "Every transaction is handled with clear communication and complete openness."
    },

    {
      icon: <FaStar />,
      title: "Excellence",
      description:
        "We strive to exceed expectations by delivering exceptional service."
    },

    {
      icon: <FaHeart />,
      title: "Client First",
      description:
        "Every decision we make is centered around our clients' needs and goals."
    },

    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "We embrace modern technology and creative solutions to improve every experience."
    },

    {
      icon: <FaUsers />,
      title: "Teamwork",
      description:
        "Collaboration allows us to deliver better outcomes for every client."
    }

  ];

  return (

    <section className="core-values">

      <div className="section-title">

        <span>OUR VALUES</span>

        <h2>The Principles That Define Our Work</h2>

        <p>
          Our values shape every interaction, every decision, and every property
          journey we undertake with our clients.
        </p>

      </div>

      <div className="values-grid">

        {values.map((value, index) => (

          <div
            className="value-card"
            key={index}
          >

            <div className="value-icon">

              {value.icon}

            </div>

            <h3>{value.title}</h3>

            <p>{value.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default CoreValues;