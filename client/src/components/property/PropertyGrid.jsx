import PropertyCard from "./PropertyCard";

import "../../styles/propertyGrid.css";

function PropertyGrid({ properties }) {

  return (

    <div className="property-grid">

      {

        properties.map((property) => (

          <PropertyCard

            key={property._id}

            property={property}

          />

        ))

      }

    </div>

  );

}

export default PropertyGrid;