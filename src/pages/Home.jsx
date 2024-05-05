// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import {
  Credits,
  Movies,
  Tv,
  Welcome
} from '../components/home-section'

import Champion from '../components/champion/Champion';
import ChampionDetail from '../components/champion/ChampionDetail';

import { championData } from '../assets/team-xmen';

const swiperOptions = {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: 'fade',
  speed: 1000
}


const Home = () => {
  
  return (
    <>
    <Swiper 
          {...swiperOptions}>
      <SwiperSlide>
        {({ isActive }) => <Welcome isActive={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive}) => <Champion isActive={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive}) => <Tv isActive={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Movies isActive={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Credits isActive={isActive} />}
      </SwiperSlide>
    </Swiper>
    {
                championData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
    
    <div className='scroll'>
      <span>Arraste para baixo e veja mais</span>
    </div>
    </>
  )
}

export default Home