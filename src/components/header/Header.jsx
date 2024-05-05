// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './header.scss';
import logo from '../../assets/logo.png'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
        <div className="header-inner container">
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <button className="menu-icon" onClick={toggleNavbar}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
            <ul className={`header-nav ${isOpen ? 'open' : ''}`}>
                <a href='https://xmen-comics.fandom.com/pt-br/wiki/Lista_de_Personagens_(Terra-616)' target='blank'>Personagens</a>
                <a href="https://xmen-comics.fandom.com/pt-br/wiki/Novos_Mutantes_(Terra-616)" target='blank'>Novos Mutantes</a>
                <a href="https://xmen-comics.fandom.com/pt-br/wiki/Wiki_X-Men_Comics" target='_blank'>HQs</a>
                <a href="">Adaptações na TV</a>
            </ul>
        </div>
    </div>
  )
}

export default Header