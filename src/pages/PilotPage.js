import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
//import { useMyContext } from '../application/Provider';
import { DivPilot, ButtonBack, DivCard, PiTitle, ImageContainer, ImagePilot, DivDescription, InfoTxt } from './PilotsPage-styled';
import NoPicture from '../assets/img/nopicture.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const PilotPage = () => {

    const { idPilot } = useParams();
    // const [state, setState] = useMyContext();
    const navigate = useNavigate();
    const [pilotData, setPilotData] = useState({});
    const [pictStatus, setPictStatus] = useState("404");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${idPilot}/`)
            .then(res => {
                //console.log(idPilot, { res });
                setPilotData(res.data);
            })
            .catch(err => console.log('error', err))
    }, []);

    const URL_IMG = `https://starwars-visualguide.com/assets/img/characters/${idPilot}.jpg`;

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
            return < ImagePilot src={URL_IMG} alt={pilotData.name} />
        } else if (pictStatus === 404) {
            return <ImagePilot src={NoPicture} alt="Generic" />
        } else {
            return <Loading />
        }
    }

    return (
        <DivPilot>
            {!pilotData.name
                ? <Loading />
                : (<>
                    <DivCard>
                        <ImageContainer>
                            {showPicture(pictStatus)}
                        </ImageContainer>
                        <DivDescription>
                            <ButtonBack onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faShare} rotation={180} /></ButtonBack>
                            <div>

                                <PiTitle>
                                    {pilotData.name}  </PiTitle>
                                <br />
                                <p><InfoTxt> Pilot</InfoTxt></p>
                                <p>BIRTH YEAR: <InfoTxt>{pilotData.birth_year}</InfoTxt></p>
                                <p>GENDER: <InfoTxt>{pilotData.gender}</InfoTxt></p>
                                <p>HEIGHT: <InfoTxt>{pilotData.height}</InfoTxt></p>
                                <p>MASS: <InfoTxt>{pilotData.mass}</InfoTxt></p>
                                <p>EYE COLOR: <InfoTxt>{pilotData.eye_color}</InfoTxt></p>
                                <p>HAIR COLOR: <InfoTxt>{pilotData.hair_color}</InfoTxt></p>
                                <p>SKIN COLOR: <InfoTxt>{pilotData.skin_color}</InfoTxt></p>
                            </div>


                        </DivDescription>

                    </DivCard>
                </>)}

        </DivPilot >
    )
}

export default PilotPage;

