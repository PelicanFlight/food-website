import styled from "styled-components";
import Image from "../../image/salad.jpg"

export const CardContainer = styled.div`

   
width: 100%;
    height: 100%;

`

export const ContentContainer = styled.div`
position: absolute;
transition: 0.3s all ease-in-out;
left: ${({isHover}) => (isHover ? '0' : '-100%')};
top: ${({isHover}) => (isHover ? '0' : '-100%')};
width: 100%;
height: 100%;

`

export const Background = styled.div`
background: white;
width: 100%;
height: 100%;
position: relative;
opacity: 0.5;

`
export const Content = styled.div`
z-index: 2;
color: black;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

export const FoodTitle = styled.h1`
font-size: 1.2rem;
text-transform: Capitalize;
font-weight: bold;
`
export const FoodDescription = styled.p`
font-size: 1.3rem;
`
