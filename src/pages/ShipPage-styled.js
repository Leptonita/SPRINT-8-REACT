import styled from "styled-components";
//import Skystars from "../assets/img/lubo-minar-B-gb_8fgmz8-unsplash.jpg";
/* background-image: url(${Skystars});*/

export const DivShip = styled.div`
color: #f9f9f9;
text-transform: uppercase;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ShipTitle = styled.div`
font-size: 2rem;
font-weight: 700;
text-align: center;
padding-top: 40px;
`;

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
min-width: 675px;
min-height: 520px;
`;
export const ImageShip = styled.img`
width: 100%;
margin: 20px auto;
box-shadow: 0px 3px 1px 0px #006affd3;

`;
export const DivTextCentered = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;
`;

export const DivGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
margin-top: 30px;
gap: 90px;
`;

export const InfoTxt = styled.span`
color: #a2a2a2;
`;