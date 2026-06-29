import "../../styles/about/mission-vision.css";
import { FaBullseye, FaEye } from "react-icons/fa";

function MissionVision() {

    return (

        <section className="mission-vision">

            <div className="section-title">

                <span>OUR PURPOSE</span>

                <h2>Driven by Purpose, Guided by Vision</h2>

                <p>
                    Everything we do is focused on delivering exceptional real estate
                    services while building long-lasting relationships with our clients.
                </p>

            </div>

            <div className="mission-grid">

                <div className="mission-card">

                    <div className="mission-icon">

                        <FaBullseye />

                    </div>

                    <h3>Our Mission</h3>

                    <p>
                        To provide trusted, transparent, and professional real estate
                        solutions that help individuals, families, and investors make
                        confident property decisions.
                    </p>

                </div>

                <div className="mission-card">

                    <div className="mission-icon">

                        <FaEye />

                    </div>

                    <h3>Our Vision</h3>

                    <p>
                        To become a leading real estate agency recognized for integrity,
                        innovation, and excellence while creating lasting value for every
                        client we serve.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default MissionVision;