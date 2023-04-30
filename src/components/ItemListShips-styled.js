import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DivItemListShips = styled.div`
width: 100%; 
background-color: rgba(42, 42, 42, 0.7);
color: #c1c1c1;
padding: 35px 30px;
margin: 20px auto;
`;

export const P300 = styled.p`
font-weight: 300;
`;

export const P500 = styled.div`
font-weight: 500;
&:hover{
    color: #fffade;
}
&:active{
    color: #f6f6f6;
}
`;

export const NavShipLink = styled(Link)`
color: #dbdbdb;
text-decoration: none;
&:focus,
&:visited{
    color: #e1e1e1;
}
&:hover{
    color: #fffade;
    text-shadow: 2px 2px 5px rgb(255, 255, 255, 0.7);
}
&:active{
    color: #f6f6f6;
}
`;

export const Plight = styled.p`
    content: "";
    background: #535353;
    height: 4px;
    width: 24px;
    border-radius: 4px;
    margin-bottom: 5px;
    left: 0px;
    z-index: 2;
${NavShipLink}:hover & {
    background: #fffade;
    box-shadow: 1px 1px 4px #fcfcf3;
}
`;
