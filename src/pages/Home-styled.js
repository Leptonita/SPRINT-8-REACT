import styled from "styled-components";
import { Link } from 'react-router-dom';
import Ship from '../assets/img/tier-transp.png'

export const DivHome = styled.div`
width: 98vw;
height: 65vh;
margin-top: -20px;
background-image: url(${Ship}); 
background-position: right center;
 background-repeat: no-repeat;
  background-size: 100%;
align-items: center;
@media(max-width: 769px) {
   background-size: 40%;
  } 
`;

export const DivTxt = styled.div`
/* text-transform: uppercase; */
font-size: 1.4rem;
width: 43%;
color: #dcdcdc;
margin: 50px 20% 37px 20%;
align-items: center;
text-shadow: 2px 2px 15px rgb(255, 255, 255, 0.7);

@media(max-width: 769px) {
     width: 80%;
     margin: 20px;
     padding:10px 20px;
  }
   @media(max-width: 500px) {
font-size: 1.2rem;
  }
`;

export const LinkBtn = styled(Link)`
text-decoration: none;
`;

export const ButtonShips = styled.button`
text-transform: uppercase;
font-size: 1rem;
padding: 9px 40px;
background-color: #fade4b;
color: black;
border: 3px solid #000515d2;
border-radius: 30px;
display: block;
margin: 20px auto;
cursor: pointer;
transition: all 0.5s ease-in-out;

&:hover {
    background-color: rgba(20, 20, 22, 0.6);
color: white;
border: 3px solid #fade4b;
}    
@media(max-width: 768px) {
    margin: 10px auto;
  }    

`;

export const Message = styled.span`
color: #fade4b;
`;