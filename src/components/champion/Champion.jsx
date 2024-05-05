// eslint-disable-next-line no-unused-vars
import React from 'react';
import './champion.scss'

import HomeSection from '../home-section/HomeSection';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { championData } from '../../assets/team-xmen';
import ChampionCard from './ChampionCard';

const Champion = props => {
  return (
    <HomeSection
    className={`champion ${props.isActive ? 'active' : ''}`}
    contentClassName='overlay'
    >
        <div className='container relative'>
            <div className="champion-list">
                <Swiper
                slidesPerView={'auto'}
                spaceBetween={0}
                grabCursor={true}
                nested={true}
                 
                >
                    {
                        championData.map((item, index) => (
                            <SwiperSlide key={index}>
                               <ChampionCard item={item} id={index}/>
                            </SwiperSlide>
                            
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </HomeSection>
  )
}

export default Champion