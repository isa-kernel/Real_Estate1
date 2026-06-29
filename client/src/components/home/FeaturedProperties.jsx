import { useEffect, useState } from "react";

import Spinner from "../common/Spinner";
import PropertyCard from "../property/PropertyCard";

import {
  getFeaturedProperties
} from "../../services/propertyService";

import "../../styles/featuredProperties.css";

function FeaturedProperties() {

  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchProperties();

  }, []);

  const fetchProperties = async () => {
  try {
    const data = await getFeaturedProperties();
    setProperties(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};


  if (loading) {

    return <Spinner />;

  }

  return (

    <section className="featured-properties">

      <div className="section-header">

        <h2>

          Featured Properties

        </h2>

        <p>

          Explore our handpicked premium properties.

        </p>

      </div>

      {

        properties.length === 0 ?

        (

          <div className="empty-state">

            No featured properties available.

          </div>

        )

        :

        (

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

        )

      }

    </section>

  );

}

export default FeaturedProperties;