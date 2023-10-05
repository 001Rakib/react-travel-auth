import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cox from "../../assets/images/cox.png";
import sajek from "../../assets/images/Sajek.png";
import sundor from "../../assets/images/sundorbon.png";
import sree from "../../assets/images/Sreemongol.png";
const Root = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('./src/assets/images/Rectangle 1.png')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={cox} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={sajek} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <img src={sundor} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sree} alt="" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Root;
