import { Link } from "react-router-dom";

import SITE from "../../config/site";

import "../../styles/hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-overlay">

                <div className="hero-content">

                    <span className="hero-tag">

                        PREMIUM REAL ESTATE

                    </span>

                    <h1>

                        {SITE.slogan}

                    </h1>

                    <p>

                        {SITE.description}

                    </p>

                    <div className="hero-buttons">

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

            </div>

        </section>

    );

}

export default Hero;