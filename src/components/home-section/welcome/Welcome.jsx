// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react'
import './welcome.scss'

import HomeSection from '../HomeSection'
import Button from '../../button/Button'

import hoverEffect from 'hover-effect';

import bgRoom from '../../../assets/x-men-team/scott-summrs.png';
import bgGenosha from '../../../assets/images/Magneto2.png';
import bgJet from '../../../assets/x-men-team/logan-james.png';
import distortion from '../../../assets/images/distortion.png';

const champImgs = [bgRoom, bgGenosha, bgJet] 

const Welcome = props => {
    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('#welcome-img-slide > img')
        let animates = []
        welcomeImgs.forEach((item, index) => {
            let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
            let animation = new hoverEffect({
                parent: document.querySelector('#welcome-img-slide'),
                intensity: 0.5,
                image1: item.getAttribute('src'),
                image2: nextImg,
                displacementImage: distortion,
                hover: false
            })
            animates.push(animation)
        })
        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            if (!document.hidden) {
                animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome-img-slide > canvas')
                document.querySelector('#welcome-img-slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])

  return (
    <HomeSection
    className={`welcome ${props.isActive ? 'active' : ''}`}
    contentClassName='overlay welcome-content'
    >
        <div className="welcome-info relative">
                <div className="welcome-info-content">
                    <div className="title">
                        <span>Bem Vindo ao</span>
                        <h2 className="main-color">Instituto do Professor Charles Xavier</h2>
                    </div>
                    <div className="description">
                    Os X-Men, criados por Stan Lee e Jack Kirby, são uma equipe de super-heróis mutantes que conquistaram o coração de fãs ao redor do mundo. Dotados de habilidades especiais decorrentes de sua evolução genética, os membros dos X-Men são liderados pelo sábio Professor Charles Xavier, também conhecido como Professor X. 
                    <br />
                    <br />
                     Ao lado dos X-Men, os Novos Mutantes trazem uma nova camada de complexidade ao universo mutante. 
                    </div>
                    <div className="btns m-t-4">
                        <Button className="btn-main">Conheça os X-Men</Button>
                        
                    </div>
                </div>
            </div>
            <div className="welcome-img relative">
                <div className="welcome-img-slide" id="welcome-img-slide">
                    {
                        champImgs.map((item, index) => (
                            <img  src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
                
    </HomeSection>
  )
}

export default Welcome