import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import image1 from '../../../../assets/images/image1.png'
import image2 from '../../../../assets/images/image2.png'
import image3 from '../../../../assets/images/image3.png'
import image4 from '../../../../assets/images/image4.png'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const images = [
    {image:image1, name: 'Makeup'},
    {image:image2, name: 'Furniture'},
    {image:image3, name: 'Electronics & Mobiles'},
    {image:image4, name: 'Car Accessories'},
    {image:image4, name: 'Toys'},
    {image:image3, name: 'Fashion'},]

export default function Categories() {
  return (
    <div>
      <div className='container'>
        <h4 className='head'>Categories</h4>
      <Swiper
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map(img=>(
            <SwiperSlide>
                <img src={img.image} alt="offer banner"/>
                <h6>{img.name}</h6>
            </SwiperSlide>
        ))}
       
      </Swiper>
      </div>
    </div>
  );
}
