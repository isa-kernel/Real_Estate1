import "../../styles/services/process-section.css";
import {
  FaComments,
  FaSearch,
  FaHome,
  FaFileSignature,
  FaHandsHelping
} from "react-icons/fa";

function ProcessSection() {

  const steps = [

    {
      icon: <FaComments />,
      title: "Consultation",
      description:
        "We begin by understanding your property goals, budget, and preferences."
    },

    {
      icon: <FaSearch />,
      title: "Property Search",
      description:
        "Our team identifies suitable properties that match your requirements."
    },

    {
      icon: <FaHome />,
      title: "Viewing",
      description:
        "Schedule convenient property viewings and explore your shortlisted options."
    },

    {
      icon: <FaFileSignature />,
      title: "Documentation",
      description:
        "We assist with negotiations, paperwork, and every legal step of the transaction."
    },

    {
      icon: <FaHandsHelping />,
      title: "After-Sales Support",
      description:
        "Our relationship continues after the transaction with ongoing professional support."
    }

  ];

  return (

    <section className="process-section">

      <div className="section-title">

        <span>OUR PROCESS</span>

        <h2>How We Work With You</h2>

        <p>
          From your first consultation to the final transaction, we provide
          professional guidance every step of the way.
        </p>

      </div>

      <div className="process-grid">

        {steps.map((step, index) => (

          <div
            className="process-card"
            key={index}
          >

            <div className="process-icon">

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

export default ProcessSection;