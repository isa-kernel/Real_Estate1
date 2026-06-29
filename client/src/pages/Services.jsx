import ServicesGrid from "../components/services/ServicesGrid";
import ServicesIntro from "../components/services/ServicesIntro";
import ProcessSection from "../components/services/ProcessSection";
import FAQ from "../components/services/FAQ";
import serviceBanner from "../assets/banners/services.jpg";
import PageBanner from "../components/common/PageBanner";

function Home(){

return(
  <>

<PageBanner
                title=""
                subtitle=""
                background={serviceBanner}
                breadcrumb={[
                    {
                        label: ""
                    }
                ]}
            />

<ServicesIntro />

<ServicesGrid />

<ProcessSection />

<FAQ />
</>
);

}

export default Home;