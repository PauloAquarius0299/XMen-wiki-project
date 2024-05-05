// eslint-disable-next-line no-unused-vars
import React from 'react'
import './tv.scss'
import anime1 from '../../../assets/images/anime6.jpg'
import anime2 from '../../../assets/images/anime2.jpg'
import anime3 from '../../../assets/images/anime3.jpg'
import anime4 from '../../../assets/images/anime4.jpg'
import anime5 from '../../../assets/images/anime5.jpg'

const tv = () => {
  return (
    <div className='animations-container overlay'>
        <div className="background-image"></div>
        <div className='container-relative'>
           
            <div className='midia'>
                <div className="title">
                    <h2>ANIMAÇÕES</h2>
                </div>
                <div className='card'>
                    <img src={anime1} alt="" />
                    </div>
                    <div className='card'>
                    <img src={anime2} alt="" />
                    </div>
                    <div className='card'>
                    <img src={anime3} alt="" />
                    </div>
                    <div className='card'>
                    <img src={anime5} alt="" />
                    </div>
                    <div className='card'>
                    <img src={anime4} alt="" />
                    </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default tv