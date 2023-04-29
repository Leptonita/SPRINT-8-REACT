import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DivPilot = styled.div`
width: 100%; 
color: #f9f9f9;
text-transform: uppercase;
display: flex;
flex-direction: column;
align-items: center;
`;

export const PiTitle = styled.div`
font-size: 2rem;
font-weight: 700;
text-align: left;
padding-top: 40px;
`;

const Border = styled.div`
border-top-left-radius:10px;
border-bottom-left-radius:130px;

@media(max-width: 768px) {
     border-bottom-left-radius:0px;
     border-top-right-radius:10px;
  }
`;

export const DivCard = styled(Border)`
max-width: 1200x;
margin-top: 30px;
display: flex;
background-color: rgba(21, 21, 29, 0.80);

@media(max-width: 768px) {
    flex-direction: column;
     width: 95%;
     min-width: 290px;
  }
`;

export const ImageContainer = styled(Border)`
display: flex;
justify-content: center;
max-width: 290px;

@media(max-width: 768px) {
     width: 100%;
     max-width: 768px;
  }
`;
export const ImagePilot = styled.img`
width: 100%;
margin: 0;
border-top-left-radius:10px;
border-bottom-left-radius:130px;

@media(max-width: 768px) {
     border-bottom-left-radius:0px;
     border-top-right-radius:10px;
  }
`;

export const DivDescription = styled.div`
font-size: 1.2rem;
min-width: 325px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 30px;

@media(max-width: 768px) {
     display: grid;
          
     grid-template-columns: 1fr;
     margin-top: 10px;
     padding: 0 40px;
  }
`;

export const DivGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
margin-top: 30px;
gap: 90px;
@media(max-width: 768px) {
     grid-template-columns: 1fr;
     margin-top: 20px;
     gap:10px;
  }
`;

export const InfoTxt = styled.span`
color: #a2a2a2;
`;

export const DivFilms = styled.div`
display: flex;

`;