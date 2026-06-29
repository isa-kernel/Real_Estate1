import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "../../styles/propertyHeader.css";

function PropertyHeader({ property }) {

  const getStatusClass = () => {
    switch (property.status) {
      case "Available":
        return "status available";
      case "Reserved":
        return "status reserved";
      case "Sold":
        return "status sold";
      default:
        return "status draft";
    }
  };

  return (
    <div className="property-header">

      <div className="header-top">

        <div>

          <h1>{property.title}</h1>

          <p className="location">
            <FaMapMarkerAlt />
            {property.location}
          </p>

        </div>

        <div className="header-badges">

          {property.featured && (
            <span className="featured-badge">
              <FaStar />
              Featured
            </span>
          )}

          <span className={getStatusClass()}>
            {property.status}
          </span>

        </div>

      </div>

      <h2 className="price">

        KSh {Number(property.price).toLocaleString()}

      </h2>

      <p className="listed-date">

        Listed on{" "}

        {new Date(property.createdAt).toLocaleDateString()}

      </p>

    </div>
  );

}

export default PropertyHeader;