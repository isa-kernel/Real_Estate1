import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaCalendarAlt,
  FaCouch
} from "react-icons/fa";

import "../../styles/propertyStats.css";

function PropertyStats({ property }) {

  const stats = [

    {
      icon: <FaBed />,
      value: property.bedrooms || 0,
      label: "Bedrooms"
    },

    {
      icon: <FaBath />,
      value: property.bathrooms || 0,
      label: "Bathrooms"
    },

    {
      icon: <FaCar />,
      value: property.parkingSpaces || 0,
      label: "Parking"
    },

    {
      icon: <FaRulerCombined />,
      value: property.area || "N/A",
      label: "Area"
    },

    {
      icon: <FaCalendarAlt />,
      value: property.yearBuilt || "N/A",
      label: "Year Built"
    },

    {
      icon: <FaCouch />,
      value: property.furnished ? "Yes" : "No",
      label: "Furnished"
    }

  ];

  return (

    <section className="property-stats">

      {

        stats.map((item,index)=>(

          <div
            className="stat-card"
            key={index}
          >

            <div className="stat-icon">

              {item.icon}

            </div>

            <h3>

              {item.value}

            </h3>

            <p>

              {item.label}

            </p>

          </div>

        ))

      }

    </section>

  );

}

export default PropertyStats;