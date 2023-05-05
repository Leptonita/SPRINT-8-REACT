import styled from "styled-components";

export const DivListIndex = styled.div`
text-transform: uppercase;
width: 60%;
margin: 5px auto;

align-items: center;
`;

export const ButtonMore = styled.button`
text-transform: uppercase;
font-size: 1rem;
padding: 9px 40px;
background-color: #fade4b;
color: black;
border-radius: 30px;
display: block;
margin: 20px auto;
cursor: pointer;
border: 3px solid #000515d2;
transition: all 0.5s ease-in-out;

&:hover {
    background-color: #181818;
    color: white;
    border: 3px solid #fade4b;
}
`;