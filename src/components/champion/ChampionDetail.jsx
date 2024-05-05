// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './champion-detail.scss';
import iconDelete from '../../assets/images/iconDelete.png';

const ChampionDetail = (props) => {
    const { item, active, id } = props;
    const iframeRef = useRef(null);


    useEffect(() => {
        const updateIframeHeight = () => {
            const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
            iframeRef.current.setAttribute('height', height);
        };
        updateIframeHeight();
        window.addEventListener('resize', updateIframeHeight);
        return () => {
            window.removeEventListener('resize', updateIframeHeight);
        };
    }, []); 

    const onClose = () => {
        document.querySelector(`#champ-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#champ-img-${props.id}`)
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

    return (
        <div
        id={`champ-detail-${id}`}
        className={`champion-detail bg-image overlay ${active ? 'active' : ''}`}
        style={{ backgroundImage: `url(${item.bgLarge})` }}
    >
        <div className="champion-detail-content">
            <span>{item.name}</span>
            <h2 className="name main-color">{item.nickName}</h2>
            <span>
                Habilidade: <span className="second-color">{item.role}</span>
            </span>
            <br />
            <span>
                Altura: <span className='second-color'>{item.altura}</span>
            </span>
            <br />
            <span>
                Peso: <span className='second-color'>{item.peso}</span>
            </span>
            <br />
            <br />
            <span>
                Recruta: <span className='second-color'>{item.introduction}</span>
            </span>
            <br />
            <div className="story">{item.description}</div>
            <span>X-Men 97 Opening</span>
            <div className="video">
                <iframe title="champion spotlight" src={item.video} ref={iframeRef} width="100%" key={`iframe-${id}`}></iframe>
            </div>
        </div>
        <div className="champion-detail-close" onClick={onClose}>
            <img src={iconDelete} alt="" />
        </div>
    </div>
    )
}    

export default ChampionDetail;
