import styled from "styled-components";

export const DivFilm = styled.div`
width: 98%; 
color: #f9f9f9;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 769px) {
 width: 96%;
max-width : 700px ;
  }
`;

export const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-width: 350px;
align-items: flex-end;

@media(max-width: 768px) {     
     min-width: 290px;
     max-width: 700px;
  }
`;

export const FilmTitle = styled.div`
font-size: 1.6rem;
font-weight: 700;
text-align: left;
padding-top: 40px;
/* text-transform: uppercase; */
`;

const Border = styled.div`
border-radius:10px;

@media(max-width: 768px) {
     border-bottom-left-radius:0px;
     border-top-right-radius:10px;
  }
`;

export const DivCard = styled(Border)`
max-width: 100%;
margin-top: 30px;
display: flex;
background-color: rgba(21, 21, 29, 0.80);

@media(max-width: 768px) {
    flex-direction: column;
     width: 100%;
     min-width: 290px;
  }
`;

export const ImageContainer = styled(Border)`
display: flex;
justify-content: center;
max-width: 50%;

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
font-size: 1rem;
min-width: 300px;
max-width: 60%;
align-items: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 30px;

@media(max-width: 768px) {
     display: grid;
     min-width: 200px;
     max-width: 100%;     
     grid-template-columns: 1fr;
     margin-top: 10px;
     margin-bottom: 20px;
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
/* text-transform: uppercase; */
`;
export const TextInfo = styled.span`
color: #a2a2a2;
`;

export const TxtEpisode = styled.span`
color: #f1d902;
font-size: 1.3rem;
font-weight: 200;
`;

export const NumEpisode = styled.span`
color: #f1d902;
font-size: 1.7rem;
font-weight: 200;
`;

export const DivFilms = styled.div`
display: flex;

`;