import "../../styles/propertyDescription.css";

function PropertyDescription({ description }) {

  return (

    <section className="property-description">

      <h2>

        About This Property

      </h2>

      {

        description

        ?

        <p>

          {description}

        </p>

        :

        <p className="no-description">

          No description has been provided for this property.

        </p>

      }

    </section>

  );

}

export default PropertyDescription;