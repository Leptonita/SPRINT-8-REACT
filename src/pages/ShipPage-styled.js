import styled from "styled-components";
//import Skystars from "../assets/img/lubo-minar-B-gb_8fgmz8-unsplash.jpg";
/* background-image: url(${Skystars});*/

export const DivShip = styled.div`
width: 100%; 
color: #f9f9f9;

display: flex;
flex-direction: column;
align-items: center;
`;

export const ShipTitle = styled.div`
text-transform: uppercase;
font-size: 2rem;
font-weight: 700;
text-align: center;
padding-top: 40px;
`;

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
min-width: 675px;

@media(max-width: 768px) {
     width: 90%;
     min-width: 300px;
  }
`;

export const DivInfoShip = styled.div`
text-transform: uppercase;
width: 100%;
display: grid;
align-items: center;
`;

export const ImageShip = styled.img`
width: 100%;
margin: 20px auto;
box-shadow: 0px 2px 1px 0px #f9f7efdf;

`;
export const DivTextCentered = styled.div`
text-transform: uppercase;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;

@media(max-width: 768px) {
     display: grid;     
     grid-template-columns: 1fr;
     margin-top: 20px;
     gap:10px;
     padding:20px;
  }
`;

export const DivGrid = styled.div`
text-transform: uppercase;
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: start;
margin-top: 30px;
 margin-left: 40px;
gap: 0px;
@media(max-width: 768px) {
     grid-template-columns: 1fr;
     justify-items: start;
     margin-top: 20px;
     gap:0px;
     margin-left: 20px;
  }
`;

export const InfoTxt = styled.span`
color: #a2a2a2;
`;

export const SubTitle = styled.div`
text-transform: uppercase;
font-size: 1.5rem;
font-weight: 700;
text-align: center;
padding-top: 30px;
`;

export const DivFilmsPilots = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;

@media(max-width: 768px) {
     display: grid;     
     grid-template-columns: 1fr;
     margin-top: 20px;
     gap:10px;
     padding:20px;
  }
`;

export const DivPosters = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1020px;

@media(max-width: 768px) {
     max-width: 750px;
  }
`;