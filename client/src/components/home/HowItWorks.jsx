import "../../styles/how-it-works.css";
import {
  FaSearch,
  FaCalendarCheck,
  FaKey
} from "react-icons/fa";

function HowItWorks() {

  const steps = [

    {
      icon: <FaSearch />,
      title: "Find a Property",
      description:
        "Browse our listings and use search filters to discover properties that match your lifestyle, budget, and preferred location."
    },

    {
      icon: <FaCalendarCheck />,
      title: "Book a Viewing",
      description:
        "Schedule a property viewing or send an inquiry. Our team will guide you through every step of the process."
    },

    {
      icon: <FaKey />,
      title: "Own or Rent with Confidence",
      description:
        "Complete the process with professional support, transparent communication, and a seamless property experience."
    }

  ];

  return (

    <section className="how-it-works">

      <div className="section-title">

        <span>HOW IT WORKS</span>

        <h2>Your Property Journey in Three Simple Steps</h2>

        <p>
          Buying, renting, or investing in real estate shouldn't be complicated.
          Here's how we help you every step of the way.
        </p>

      </div>

      <div className="steps-container">

        {steps.map((step, index) => (

          <div
            className="step-card"
            key={index}
          >

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default HowItWorks;