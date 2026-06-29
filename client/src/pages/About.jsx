import PageBanner from "../components/common/PageBanner";
import AboutStory from "../components/about/AboutStory";

import aboutBanner from "../assets/banners/about.jpg";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";

function About() {

    return (

        <>

            <PageBanner
                title="About Us"
                subtitle="Learn more about our agency and our commitment to helping clients achieve their real estate goals."
                background={aboutBanner}
                breadcrumb={[
                    {
                        label: "About"
                    }
                ]}
            />

            <AboutStory />
            <MissionVision />
            <CoreValues />

        </>

    );

}

export default About;