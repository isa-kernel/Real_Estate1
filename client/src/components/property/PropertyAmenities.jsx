import { FaCheckCircle } from "react-icons/fa";

import "../../styles/propertyAmenities.css";

function PropertyAmenities({ amenities = [] }) {

  return (

    <section className="property-amenities">

      <h2>

        Amenities

      </h2>

      {

        amenities.length > 0

        ?

        <div className="amenities-list">

          {

            amenities.map((item,index)=>(

              <div

                className="amenity"

                key={index}

              >

                <FaCheckCircle/>

                <span>

                  {item}

                </span>

              </div>

            ))

          }

        </div>

        :

        <p className="no-amenities">

          No amenities listed.

        </p>

      }

    </section>

  );

}

export default PropertyAmenities;