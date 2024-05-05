// eslint-disable-next-line no-unused-vars
import React from 'react'
import './movies.scss';

import movie1 from '../../../assets/images/movie1.jpg'
import movie2 from '../../../assets/images/movie2.jpg'
import movie3 from '../../../assets/images/movie3.jpg'
import movie4 from '../../../assets/images/movie4.jpg'
import movie5 from '../../../assets/images/movie5.jpg'
import movie6 from '../../../assets/images/movie6.jpg'
import movie7 from '../../../assets/images/movie7.jpg'
import movie8 from '../../../assets/images/movie8.jpg'
import movie9 from '../../../assets/images/movie9.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const Movies = () => {
  return (
    <div className='movies-container overlay'>
        <div className="background-image"></div>
        <div className="container-relative">
            <div className="midia">
                <div className="title">
                    <h2 className='m-t-4'>CINEMA</h2>
                    <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    navigation={{  
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next'
                    }}
                    
                    >
                        <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie1} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie2} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie3} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie4} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie5} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie6} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie7} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie8} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    <SwiperSlide>
                    
                    <div className="card">
                        <img src={movie9} alt="" />
                    </div>
                   
                    </SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev"></div> 
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movies