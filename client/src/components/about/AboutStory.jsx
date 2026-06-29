import "../../styles/about/about-story.css";
import { FaCheckCircle } from "react-icons/fa";

import agencyImage from "../../assets/banners/agency.jpg";

function AboutStory() {

  return (

    <section className="about-story">

      <div className="about-image">

        <img
          src={agencyImage}
          alt="About Our Agency"
        />

      </div>

      <div className="about-content">

        <span>WHO WE ARE</span>

        <h2>Your Trusted Partner in Real Estate</h2>

        <p>
          We are dedicated to helping individuals, families, and investors
          find exceptional real estate opportunities. Our focus is on
          transparency, professionalism, and delivering personalized
          solutions that meet every client's unique needs.
        </p>

        <p>
          Whether you're purchasing your first home, searching for land,
          investing in commercial property, or looking for rental options,
          our experienced team is here to guide you through every step of
          the journey.
        </p>

        <div className="about-features">

          <div>

            <FaCheckCircle />

            Trusted Professionals

          </div>

          <div>

            <FaCheckCircle />

            Transparent Process

          </div>

          <div>

            <FaCheckCircle />

            Prime Property Listings

          </div>

          <div>

            <FaCheckCircle />

            Client-Centered Service

          </div>

        </div>

      </div>

    </section>

  );

}

export default AboutStory;