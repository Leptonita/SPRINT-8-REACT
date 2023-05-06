import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
//import { useMyContext } from '../application/Provider';
import { DivFilm, ButtonBack, DivCard, FilmTitle, ImageContainer, ImageFilm, DivDescription, InfoTxt, TextInfo } from './FilmPage-styled';
import NoPicture from '../assets/img/nopicture.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const FilmPage = () => {

    const { idFilm } = useParams();
    //const [state, setState] = useMyContext();
    const navigate = useNavigate();
    const [filmData, setFilmData] = useState({});
    const [pictStatus, setPictStatus] = useState("404");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/films/${idFilm}/`)
            .then(res => {
                //console.log({ idFilm }, { res });
                setFilmData(res.data);
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
                            <ButtonBack onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faShare} rotation={180} /></ButtonBack>
                            <div>

                                <FilmTitle>
                                    {filmData.title}  </FilmTitle>
                                <br />
                                <p>EPISODE <InfoTxt> {filmData.episode_id}</InfoTxt></p>
                                <p>DIRECTOR: <InfoTxt>{filmData.director}</InfoTxt></p>
                                <p>PRODUCER: <InfoTxt>{filmData.producer}</InfoTxt></p>
                                <p>RELEASE DATE: <InfoTxt>{filmData.release_date}</InfoTxt></p>
                                <p>OPENING CRAWL: <TextInfo>{filmData.opening_crawl}</TextInfo></p>

                            </div>
                        </DivDescription>
                    </DivCard>
                    <br />
                </>)}

        </DivFilm >
    )
}

export default FilmPage;

