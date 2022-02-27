import './slidePlayList.scss';
import {NavLink} from 'react-router-dom'
import {ALBUM_SLUG} from './../../contants/slug'
import 
    { Swiper, SwiperSlide } 
from 'swiper/react';
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Pagination,Autoplay } from "swiper";

import Thumb from '../Thumb'
 function SlidePlayList({dataSlide}) {
   const isIconPlay = true
   const isHoverBgDark = true
  return (
    <div className='home__slide-play-list'>
      <div className="title">Playlist cho hôm nay</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        
        autoplay={
            {
                delay: 2000,
                disableOnInteraction: false,
            }

        }
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {
            dataSlide.items.map((item,index)=>{
              return (
              
                  <SwiperSlide  key = {index}  >
                      <NavLink to={`/${ALBUM_SLUG}/${item.encodeId}`}>
                            <Thumb
                                img={item.thumbnailM}
                                text={item.text} 
                                isIconPlay = {isIconPlay}
                                isHoverBgDark = {isHoverBgDark}
                            />
                      </NavLink>
                          
                  </SwiperSlide>
              )
            })
        }
      </Swiper>
    </div>
  );
}

export default SlidePlayList