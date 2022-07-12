import React, {useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll/modules'
import { FooterContainer, 
    FooterWrapper, 
    FooterContact, 
    FooterBrand, 
    BrandDescription, 
    Email, 
    Contact, 
    FooterCategory, 
    FooterItem,
LinkTitle,
LinkItem,
Copyright,
IconSvg
} from './FooterElements'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Icon from "../../image/navlogo.png"



const Footer = () => {

    const scrollTop = () => {
  scroll.scrollToTop()
}


useEffect(() => {
  Aos.init({duration: 2000});
}, []);

  

  return (
    <FooterContainer >
<FooterWrapper>
    <FooterContact>
        <FooterBrand onClick={scrollTop}>
               <IconSvg src={Icon}/>
            Carlo's</FooterBrand>
        <BrandDescription></BrandDescription>
        <Email>Email: vonojastro@gmail.com</Email>
        <Contact>Contact: 09284504220</Contact>
    </FooterContact>
    <FooterCategory>

        <FooterItem>
            <LinkTitle to="service"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >Our Service</LinkTitle>

            <LinkItem to="service"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >Delivery</LinkItem>

           
            
        </FooterItem>
        <FooterItem>
            <LinkTitle to="specialty"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >Our Product</LinkTitle>

            
            <LinkItem to="specialty"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >Pizza</LinkItem>
        </FooterItem>
        <FooterItem>
            <LinkTitle to="about"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >Information</LinkTitle>

           
            <LinkItem to="about"
             smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            >About</LinkItem>

        </FooterItem>
    </FooterCategory>
</FooterWrapper>
<Copyright>©2022 Carlo's | All Rights Reserved | Made by Von Carlo Ojastro</Copyright>
    </FooterContainer>
  )
}

export default Footer