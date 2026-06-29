import { Link } from "react-router-dom";
import "../../styles/cta-section.css";

function CTASection() {

  return (

    <section className="cta-section">

      <div className="cta-content">

        <span>LET'S GET STARTED</span>

        <h2>Ready to Find Your Dream Property?</h2>

        <p>
          Whether you're buying, selling, renting, or investing,
          our experienced team is here to guide you through every
          step of your real estate journey.
        </p>

        <div className="cta-buttons">

          <Link
            to="/properties"
            className="primary-btn"
          >
            Browse Properties
          </Link>

          <Link
            to="/contact"
            className="secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>

  );

}

export default CTASection;