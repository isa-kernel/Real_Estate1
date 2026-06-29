import { Link } from "react-router-dom";

import {
  FaBed,
  FaBath,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../../styles/propertyCard.css";

function PropertyCard({ property }) {

  return (

    <div className="property-card">

      <div className="property-image">

        <img

          src={
            property.images?.[0] ||
            "https://placehold.co/600x400?text=No+Image"
          }

          alt={property.title}

        />

        <span className="status-badge">

          {property.status}

        </span>

        {

          property.featured &&

          <span className="featured-badge">

            Featured

          </span>

        }

      </div>

      <div className="property-content">

        <h3>

          {property.title}

        </h3>

        <p className="property-location">

          <FaMapMarkerAlt />

          {property.location}

        </p>

        <h2>

          KSh {property.price.toLocaleString()}

        </h2>

        <div className="property-info">

          <span>

            <FaBed />

            {property.bedrooms}

          </span>

          <span>

            <FaBath />

            {property.bathrooms}

          </span>

        </div>

        <Link

          to={`/property/${property._id}`}

          className="details-btn"

        >

          View Details

        </Link>

      </div>

    </div>

  );

}

export default PropertyCard;