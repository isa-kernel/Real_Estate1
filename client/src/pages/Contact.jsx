import PageBanner from "../components/common/PageBanner";
import ContactInfo from "../components/contact/ContactInfo";
import ContactIntro from "../components/contact/ContactIntro";
import contactBanner from "../assets/banners/contact.jpg";
import ContactForm from "../components/contact/ContactForm";

function Home(){

return(
<>
<PageBanner
                title="Reach Us"
                subtitle="Learn more about our agency and our commitment to helping clients achieve their real estate goals."
                background={contactBanner}
                breadcrumb={[
                    {
                        label: "Contact"
                    }
                ]}
            />

<ContactIntro />

<ContactInfo />

<ContactForm />
</>
);

}

export default Home;