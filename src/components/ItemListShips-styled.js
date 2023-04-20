import styled from "styled-components";
import { Link } from 'react-router-dom';

export const DivItemListShips = styled.div`
width: 60%;
background-color: rgba(42, 42, 42, 0.7);
color: #c1c1c1;
padding: 15px 30px;
margin: 10px auto;
`;
export const P300 = styled.p`
font-weight: 300;
`;
export const P500 = styled.p`
font-weight: 500;
`;

export const NavShipLink = styled(Link)`
color: #e1e1e1;
text-decoration: none;
&:focus,
&:visited{
    color: #f7f7ff;
}
&:hover{
    color: #0091ff;
}
&:active{
    color: #0080e1;
};
`;