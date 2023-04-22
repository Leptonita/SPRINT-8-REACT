import styled from "styled-components";
//import logo from '../sw_logo.webp';
import { Link } from 'react-router-dom';

const greyBorder = "#4f4f4f";

/* export const DivBar = styled.div`
display: flex;
height: 130px;
align-items: center;
justify-content: flex-end;
color: #d9d9d9;
background-image: url(${logo});
background-repeat: no-repeat;
background-position: center;
background-size: 210px;
padding: 20px 40px
`; */

export const DivHeader = styled.div`
 width: 98vw; 
color: #adadad;
margin-left: 5px;
`;

export const DivBarGridLogin = styled.div`
display: grid;
height: 130px;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
padding: 20px 30px;
@media(max-width: 768px) {
    padding: 20px;
  }
`;
export const DivImg = styled.div`
display: flex;
justify-content: center;
`;

export const LogoImg = styled.img`
width: 210px ;
margin: 10px auto;
@media(max-width: 768px) {
    min-width: 140px;
    margin-right: 5px;
  }
`;
export const DivLoginLeft = styled.div`
visibility: hidden;

@media(max-width: 768px) {
    visibility: visible;
    display: block;
    min-width: 100px;
  }
`;
export const DivLoginLeftLinks = styled.div`
display:none;

@media(max-width: 768px) {
    display: block;
  }
`;

export const DivLogin = styled.div`
display: flex;
flex-flow: row wrap;
align-content: flex-end;
margin-left: auto;

@media(max-width: 768px) {
    flex: column; 
   /*  margin-left: 0;*/
   align-content: flex-end;
   margin-left: 10px
  }
`;

export const SpanLogin = styled.span`
margin-right: 20px;
@media(max-width: 768px) {
     display:none;
  }
`;

export const MenuMobile = styled.span`
display:none;
color: yellow;
cursor: pointer;

@media(max-width: 768px) {
    display: flex;
align-content: flex-end;
margin-left: auto;
  }
`;

export const UlMenu = styled.ul`
width: 100%;
margin: 20px 0;
border-top: 2px solid ${greyBorder};
border-bottom: 2px solid ${greyBorder};

display: flex;
justify-content: center;
align-items: center;
list-style-type: none;
`;

export const LiMenu = styled.li`
padding: 15px 25px;
border-right: 2px solid ${greyBorder};

&:first-child {
    border-left: 2px solid ${greyBorder};
}
&:hover {
    border-bottom: 4px solid #006affd3;
    margin-bottom: -4px;
    color: #fff;
    z-index: 10;
}
`;

export const NavbarLink = styled(Link)`
color: #a7aaaa;
text-decoration: none;
&:focus,
&:visited{
    color: #b4b4b4;
}
&:hover{
    color: #fff;
}
&:active{
    color: #0080e1;
};
`;

