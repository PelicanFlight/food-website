import styled from "styled-components";
import {Link as LinkS} from "react-scroll"


export const FooterContainer = styled.div`
height: 500px;
display: flex; 
width: 100%;
flex-direction: column;
box-shadow: 0px 0px 8px rgba(0,0,0,0.3)
`

export const FooterWrapper = styled.div`
max-width: 1100px;
display: grid;
grid-template-columns: 4fr 6fr;

align-items: center;

width: 100%;
margin: auto;

@media screen and (max-width: 900px) {
display: flex;
flex-direction: column;

}
`

export const FooterContact = styled. div`
margin-left: 20px;
line-height: 2.5rem;
padding: 30px 0px;

@media screen and (max-width: 900px) {
text-align: center;

}
`

export const FooterBrand = styled.div`
cursor: pointer;
font-weight: bold;
display: flex;
justify-content: flex-start;
gap: 10px;
align-items: center;
font-size: 1.3rem;

@media screen and (max-width: 1000px) {
    justify-content: center;
}
`

export const IconSvg = styled.img`

height: 30px;
`

export const BrandDescription = styled.p`
max-width: 300px;
font-size: 0.9rem;
line-height: 2rem;
margin-bottom: 20px;
color: grey;
`


export const Email = styled.div`
font-size: 0.9rem;
line-height: 2rem;
color: grey;
`

export const Contact = styled.div`
font-size: 0.9rem;
line-height: 2rem;
color: grey;
`

export const FooterCategory = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
text-align: center;

@media screen and (max-width: 550px) {
grid-template-columns: 1fr;
}

`

export const FooterItem = styled.div`
line-height: 2.5rem;

@media screen and (max-width: 900px) {
padding: 0px 30px;
}

@media screen and (max-width: 550px) {
padding: 10px 0px;
}
`

export const LinkTitle = styled(LinkS)`
text-decoration: none;
display: flex;
flex-direction: column;
color: #000;
cursor: pointer;
font-weight: bold;

&:hover {
    color: #ECA915;

}
`

export const LinkItem = styled(LinkS)`
cursor: pointer;
text-decoration: none;
display: flex;
flex-direction: column;
color: grey;

&:hover {
    color: #ECA915;

}
`



export const Copyright = styled.p`
background: #fafafa;
text-align: center;
color: grey;
padding: 40px 0px;

@media screen and (max-width: 550px) {
padding: 40px 20px;
line-height: 2rem;
}
`