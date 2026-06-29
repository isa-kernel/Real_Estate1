import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProperty } from "../services/propertyService";
import InquiryForm from "../components/forms/InquiryForm";
import PropertyHeader from "../components/property/PropertyHeader";
import PropertyStats from "../components/property/PropertyStats";
import PropertyDescription from "../components/property/PropertyDescription";
import PropertyAmenities from "../components/property/PropertyAmenities";

import "../styles/propertydetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getProperty(id);
        setProperty(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!property) {
    return <h2>Property Not Found</h2>;
  }

  return (
    <div className="property-details">
      <img
        className="property-image"
        src={property.images?.[0] || "https://via.placeholder.com/800x500"}
        alt={property.title}
      />

      {/* Header and stats components handle title, location, price, etc. */}
      <PropertyHeader property={property} />
      <PropertyStats property={property} />

      {/* ❌ Commented out because PropertyHeader and PropertyStats already cover this info
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <h2>KSh {property.price.toLocaleString()}</h2>
      <p>{property.description}</p>
      <div className="features">
        <div>Bedrooms: {property.bedrooms}</div>
        <div>Bathrooms: {property.bathrooms}</div>
        <div>Type: {property.type}</div>
        <div>Status: {property.status}</div>
      </div>
      */}

      {/* Inquiry form for contacting about this property */}
      <InquiryForm propertyId={property._id} />

      {/* Description and amenities components */}
      <PropertyDescription description={property.description} />
      <PropertyAmenities amenities={property.amenities} />
    </div>
  );
}

export default PropertyDetails;
