import React from "react";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "../styles/Slider.css";

import image1 from "../assets/dog1.jpg"
import image2 from "../assets/dog2.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={{
                    enabled: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <div className="slide-container">


                        <div className="title">Pick Me!</div>
                        <div className="dog-name">Max</div>
                        <Link to="/adopt">
                            <button className="slide-button"> ADOPTABLE DOGS </button>
                        </Link>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <div className="slide-container">


                        <div className="title">Pick Me!</div>
                        <div className="dog-name">Boomer</div>
                        <Link to="/adopt">
                            <button className="slide-button"> ADOPTABLE DOGS </button>
                        </Link>

                    </div>

                </SwiperSlide>

            </Swiper>
        </>
    );
}
