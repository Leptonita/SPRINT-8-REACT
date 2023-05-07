//import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
//import { useMyContext } from '../application/Provider';
import { DivFilm, Header, DivCard, FilmTitle, ImageContainer, ImageFilm, DivDescription, InfoTxt, TextInfo, TxtEpisode, NumEpisode } from './Film-styled';
import NoPicture from '../assets/img/nopicture.jpg';
//import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faShare } from '@fortawesome/free-solid-svg-icons'

const Film = ({ idFilm }) => {

    //const { idFilm } = useParams();
    //const [state, setState] = useMyContext();
    // const navigate = useNavigate();
    const [filmData, setFilmData] = useState({});
    const [pictStatus, setPictStatus] = useState("404");

    useEffect(() => {
        fetch(`https://swapi.dev/api/films/${idFilm}/`)
            .then((response) => response.json())
            .then(resPelis => {
                //console.log({ idFilm }, "res", resPelis);
                setFilmData(resPelis);
            })
            .catch(err => console.log('error', err))
    }, []);

    const URL_IMG = `https://starwars-visualguide.com/assets/img/films/${idFilm}.jpg`;

    useEffect(() => {
        fetch(URL_IMG)
            .then(res => {
                //console.log({ res });
                setPictStatus(res.status);
            })
            .catch(err => console.log('error', err))
    }, [])


    const showPicture = (pictStatus) => {
        if (pictStatus === 200) {
            return < ImageFilm src={URL_IMG} alt={filmData.name} />
        } else if (pictStatus === 404) {
            return <ImageFilm src={NoPicture} alt="Generic" />
        } else {
            return "error"
        }
    }

    return (
        <DivFilm>
            {!filmData.title
                ? <Loading />
                : (<>
                    <DivCard>
                        <ImageContainer>
                            {showPicture(pictStatus)}
                        </ImageContainer>
                        <DivDescription>
                            <Header>
                                <FilmTitle>
                                    {filmData.title}  </FilmTitle>

                                <p><TxtEpisode>EPISODE </TxtEpisode> <NumEpisode>{filmData.episode_id}</NumEpisode></p>
                            </Header>
                            <div>



                                <hr /><br />
                                <p>RELEASE DATE: <InfoTxt>{filmData.release_date}</InfoTxt></p>
                                <p>DIRECTOR: <InfoTxt>{filmData.director}</InfoTxt></p>
                                <p>PRODUCER: <InfoTxt>{filmData.producer}</InfoTxt></p>

                                <br />
                                <p>OPENING CRAWL: <TextInfo>{filmData.opening_crawl}</TextInfo></p>

                            </div>
                        </DivDescription>
                    </DivCard>
                    <br />
                </>)}

        </DivFilm >
    )
}

export default Film;

