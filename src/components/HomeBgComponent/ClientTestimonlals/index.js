import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";



import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./index.css";

const ClientTestimonlals = () => {
  useEffect(() => {
    AOS.init({duration : 1000})
  }, [])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 774 },
      items: 2,
      showDots: false,
    },
    mobile: {
      breakpoint: { max: 774, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ClientTestimonlals-bg-co">
      <div className="ClientTestimonlals-card-co">
        <div  className="clienttest-top-heding-bg-co">
          <p className="clienttest-top-heding-bg-co-paragraph">
            CLIENT TESTMONIALS
          </p>
          <h1 className="clienttest-top-heding-bg-co-heding">WHAT THEY SAY?</h1>
        </div>
        <div  className="clienttest-card-bg-co-main-co">
        <div    className="clienttest-card-bg-co">
          <div className="clienttest-card-bg-card-co">
            <p className="clienttest-card-bg-card-co-pragraph">
              Reliable accessible Ul components: focus styles, content sliders,
              dark mode, date pickers, navigation, modals, radio buttons Neque
              porro est qui.
            </p>
          </div>
          <div className="clienttest-card-bg-card-co-id-bg-co">
            <img
              src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-img-3.a66626fa.jpg&w=96&q=75"
              alt="loding"
              className="clienttest-card-bg-card-co-id-bg-co-img-class"
            />
            <div className="clienttest-card-bg-card-co-id-bg-co-text-co">
              <p className="clienttest-card-bg-card-co-id-bg-co-text-co-first-pa">
                MIKE HARDSON
              </p>
              <p className="clienttest-card-bg-card-co-id-bg-co-text-co-second-pa">
                MIKEjjh
              </p>
            </div>
          </div>
        </div>
        </div>

    

        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "superLargeDesktop",
            "desktop",
          ]}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
        >
           <div>
  <div className="clienttest-card-bg-co">
<div className="clienttest-card-bg-card-co">
  <p className="clienttest-card-bg-card-co-pragraph">
    Reliable accessible Ul components: focus styles, content sliders,
    dark mode, date pickers, navigation, modals, radio buttons Neque
    porro est qui.
  </p>
</div>
<div className="clienttest-card-bg-card-co-id-bg-co">
  <img
    src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-img-2.5f4b8541.jpg&w=96&q=75"
    alt="loding"
    className="clienttest-card-bg-card-co-id-bg-co-img-class"
  />
  <div className="clienttest-card-bg-card-co-id-bg-co-text-co">
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-first-pa">
      MIKE HARDSON
    </p>
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-second-pa">
      MIKEjjh
    </p>
  </div>
</div>
</div>
  </div>
  <div>
  <div className="clienttest-card-bg-co">
<div className="clienttest-card-bg-card-co">
  <p className="clienttest-card-bg-card-co-pragraph">
    Reliable accessible Ul components: focus styles, content sliders,
    dark mode, date pickers, navigation, modals, radio buttons Neque
    porro est qui.
  </p>
</div>
<div className="clienttest-card-bg-card-co-id-bg-co">
  <img
    src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-img-3.a66626fa.jpg&w=96&q=75"
    alt="loding"
    className="clienttest-card-bg-card-co-id-bg-co-img-class"
  />
  <div className="clienttest-card-bg-card-co-id-bg-co-text-co">
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-first-pa">
      MIKE HARDSON
    </p>
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-second-pa">
      MIKEjjh
    </p>
  </div>
</div>
</div>
  </div>
  <div>
  <div className="clienttest-card-bg-co">
<div className="clienttest-card-bg-card-co">
  <p className="clienttest-card-bg-card-co-pragraph">
    Reliable accessible Ul components: focus styles, content sliders,
    dark mode, date pickers, navigation, modals, radio buttons Neque
    porro est qui.
  </p>
</div>
<div className="clienttest-card-bg-card-co-id-bg-co">
  <img
    src="https://kimox.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-img-4.b644cdd9.jpg&w=96&q=75"
    alt="loding"
    className="clienttest-card-bg-card-co-id-bg-co-img-class"
  />
  <div className="clienttest-card-bg-card-co-id-bg-co-text-co">
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-first-pa">
      MIKE HARDSON
    </p>
    <p className="clienttest-card-bg-card-co-id-bg-co-text-co-second-pa">
      MIKEjjh
    </p>
  </div>
</div>
</div>
  </div>
         
        </Carousel>
      </div>
    </div>
  );
};

export default ClientTestimonlals;



