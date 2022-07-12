import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
position: sticky;
top: 0;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 70px;
z-index: 3;
box-shadow: 0px 0px 12px rgba(0,0,0,0.3)

`

export const NavLink = styled(LinkS)`
text-decoration: none;
`

export const NavbarContainer = styled.div`
max-width: 1100px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const NavLogo = styled.div`
padding: 0px 20px;
font-size: 1.5rem;
display: flex;
align-items: center;
    color: #ECA915;

cursor: pointer;
`


export const Img =styled.img`
width: 40px;
margin-right: 10px;
`

export const MobileIcon =styled.div`
display: none;
color: #ECA915;

font-size: 2rem;


 cursor: pointer;
 transition: 0.2s all ease-in-out;


@media screen and (max-width: 900px) {
    display: block;
}
`

export const Icon =styled(FaBars)`
transition: 0.1s all ease-in-out;
position: absolute;
right: 4%;
top: 30%;

transform: ${({isOpen}) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
opacity: ${({isOpen}) => (isOpen ? '0' : '100%')};
`
export const Icon2 =styled(FaTimes)`
transition: 0.2s all ease-in-out;
position: absolute;
right: 4%;
top: 30%;
transform: ${({isOpen}) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`

export const NavMenu = styled.div`

@media screen and (max-width: 900px) {
    display: none;
}

`



