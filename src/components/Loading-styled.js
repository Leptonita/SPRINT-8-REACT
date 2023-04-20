import styled, { keyframes } from 'styled-components';

export const LoadingDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Balls = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;
`;

const brighten = keyframes`  
  0% { opacity: 0;  }
  45%{ opacity: 1; }
  100% { opacity: 0;  }
`;

export const Ball = styled.div`
width: 10px;
height: 10px;
margin: 5px;
border-radius: 50%;
background-color: yellowgreen;
animation: ${brighten} ${props => props.time ? props.time : '2s'} linear infinite;
`;