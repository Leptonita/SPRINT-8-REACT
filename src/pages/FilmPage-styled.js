import styled from "styled-components";

export const DivFilm = styled.div`
width: 100%; 
color: #f9f9f9;

display: flex;
flex-direction: column;
align-items: center;
`;



export const FilmTitle = styled.div`
font-size: 2rem;
font-weight: 700;
text-align: left;
padding-top: 40px;
text-transform: uppercase;
`;

const Border = styled.div`
border-radius:10px;

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
max-width: 400px;

@media(max-width: 768px) {
     width: 100%;
     max-width: 768px;
  }
`;
export const ImageFilm = styled.img`
width: 100%;
margin: 0;
border-top-left-radius:10px;
border-bottom-left-radius:10px;

@media(max-width: 768px) {
     border-bottom-left-radius:0px;
     border-top-right-radius:10px;
  }
`;

export const DivDescription = styled.div`
font-size: 1.2rem;
min-width: 325px;
max-width: 500px;
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

export const ButtonBack = styled.button`
margin-left: auto;
padding: 2px 6px;
border-radius: 50%;
color: #b3b3b3;
background-color: black;

cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
text-shadow: 2px 2px 15px rgb(255, 255, 255, 0.7);
color: white;

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
text-transform: uppercase;
`;
export const TextInfo = styled.span`
color: #a2a2a2;
`;

export const DivFilms = styled.div`
display: flex;

`;