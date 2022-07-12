import React, { useEffect } from 'react'
import {Nav, NavbarContainer, NavLogo,Img, Icon, Icon2,  MobileIcon, NavMenu, NavLink} from './NavbarElements' 
import {FaBars} from 'react-icons/fa'
import navlogo from '../../image/navlogo.png'
import { animateScroll as scroll } from 'react-scroll/modules'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './styles.css'

const NavBar = ({isOpen, toggle}) => {
const scrollTop = () => {
  scroll.scrollToTop()
}

useEffect(() => {
  Aos.init({duration: 2000});
}, []);

  return (
    <Nav>
        <NavbarContainer onClick={scrollTop}>
            <NavLogo >
                <Img src={navlogo}/>
Carlo's 
            </NavLogo>

            <MobileIcon onClick={toggle} isOpen={isOpen}>
                <Icon isOpen={isOpen}/>
                <Icon2 isOpen={isOpen}/>
            </MobileIcon>

            <NavMenu>
              <NavLink to='/'
              onClick={scrollTop}
              smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}>
        <a className='navlinks' 
            >Home</a>
              </NavLink>
              
              <NavLink to='about'
              smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}>
        <a className='navlinks' 
            >About</a>
              </NavLink>
    
              <NavLink to='specialty'
              smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}>
        <a className='navlinks' 
            >Specialty</a>
              </NavLink>
    
              <NavLink to='gallery'
              smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}>
        <a className='navlinks' 
            >Gallery</a>
              </NavLink>
    

  
       
            </NavMenu>
        </NavbarContainer>
    </Nav>
  )
}

export default NavBar