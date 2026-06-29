import "../../styles/stats-section.css";
import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaAward
} from "react-icons/fa";

function StatsSection() {

  const stats = [

    {
      icon: <FaHome />,
      number: "500+",
      label: "Properties Listed"
    },

    {
      icon: <FaUsers />,
      number: "250+",
      label: "Happy Clients"
    },

    {
      icon: <FaBuilding />,
      number: "120+",
      label: "Successful Transactions"
    },

    {
      icon: <FaAward />,
      number: "10+",
      label: "Years of Experience"
    }

  ];

  return (

    <section className="stats-section">

      <div className="section-title">

        <span>OUR ACHIEVEMENTS</span>

        <h2>Trusted by Hundreds of Clients</h2>

        <p>
          We are proud of the relationships we've built and the results we've
          delivered. Every property represents another client achieving their
          real estate goals.
        </p>

      </div>

      <div className="stats-grid">

        {stats.map((stat, index) => (

          <div className="stat-card" key={index}>

            <div className="stat-icon">

              {stat.icon}

            </div>

            <h3>{stat.number}</h3>

            <p>{stat.label}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default StatsSection;