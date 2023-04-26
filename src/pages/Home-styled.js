import styled from "styled-components";
import { Link } from 'react-router-dom';
import V19 from '../assets/img/v-19-transp2.png';

export const DivHome = styled.div`
width: 98vw;
height: 65vh;
margin-top: -22px;
background-image: url(${V19});
background-position: right center;
 background-repeat: no-repeat;
  background-size: 90%;
align-items: center;
@media(max-width: 769px) {
   background-size: 40%;
  } 
`;

export const DivTxt = styled.div`
/* text-transform: uppercase; */
font-size: 1.2rem;
width: 35%;
color: #dcdcdc;
margin: 50px 20%;
align-items: center;

@media(max-width: 769px) {
     width: 80%;
     margin: 20px;
     padding:10px 20px;
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
border: 2px solid #000515d2;
border-radius: 30px;
display: block;
margin: 20px auto;
cursor: pointer;

&:hover {
    background-color: rgba(20, 20, 22, 0.6);
color: white;
border: 2px solid #fade4b;
}    
@media(max-width: 768px) {
    margin: 10px auto;
  }    

`;