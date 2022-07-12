import styled from "styled-components";
import { MobileIcon } from "../Navbar/NavbarElements";

export const SidebarContainer = styled.div`

display: none;

@media screen and (max-width: 900px) {
    display: block;
height: ${({isOpen}) => (isOpen ? '100vh' : '0')};
background: lightgreen;
width: 100%;
opacity: 100%;
transition: 0.3s all ease-in-out;
position: fixed;
z-index: 3;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
}


`

export const MobileIconClose = styled.div`
font-size: 2rem;
color: #ECA915;
position: absolute;
top: -10%;
right: 0;
padding: 0px 20px;


`

export const SidebarMenu = styled.div`
display: flex;
transition: 0.3s all ease-in-out;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
`

export const SidebarLink = styled.div`
color: #fff;
font-size: 2rem;
line-height: 5rem;
`