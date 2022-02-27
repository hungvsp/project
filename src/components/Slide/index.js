import './slide.scss';
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';

//import img 

import {
    SLIDE1,
    SLIDE2,
    SLIDE3,
    SLIDE4,
    SLIDE5,
    SLIDE6,
    SLIDE7
} from './../../contants/slide'
// Import Swiper

import { Autoplay, Pagination, Navigation } from "swiper";

function Slice(){
    return(
        <div className="home__slice">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={SLIDE1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SLIDE7} alt="" />
                </SwiperSlide>
               
            </Swiper>
        </div>
    )
}
export default Slice
