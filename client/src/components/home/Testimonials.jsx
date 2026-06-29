import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "../../styles/testimonials.css";

function Testimonials() {

  const testimonials = [

    {
      name: "James Mwangi",
      location: "Nairobi",
      review:
        "Buying our first home was a smooth experience. The team guided us through every step with professionalism."
    },

    {
      name: "Grace Wanjiku",
      location: "Kiambu",
      review:
        "Excellent customer service and quality property options. I found exactly what I was looking for."
    },

    {
      name: "Brian Otieno",
      location: "Nakuru",
      review:
        "Transparent process, great communication, and no hidden surprises. I highly recommend this agency."
    },

    {
      name: "Mercy Achieng",
      location: "Kisumu",
      review:
        "The booking process was simple, and the staff were always available whenever I needed assistance."
    },

    {
      name: "Daniel Kiptoo",
      location: "Eldoret",
      review:
        "Professional service from the first inquiry to closing the deal. The experience exceeded my expectations."
    }

  ];

  return (

    <section className="testimonials">

      <div className="section-title">

        <span>TESTIMONIALS</span>

        <h2>What Our Clients Say</h2>

        <p>
          The satisfaction of our clients is our greatest achievement.
        </p>

      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }}
      >

        {testimonials.map((testimonial, index) => (

          <SwiperSlide key={index}>

            <div className="testimonial-card">

              <FaQuoteLeft className="quote-icon" />

              <div className="stars">

                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <p className="review">

                "{testimonial.review}"

              </p>

              <h3>{testimonial.name}</h3>

              <span>{testimonial.location}</span>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );

}

export default Testimonials;