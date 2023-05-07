import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { DivShip, ShipTitle, ImageShip, ImageContainer, DivTextCentered, DivGrid, InfoTxt, SubTitle, DivFilmsPilots, DivPosters } from './ShipPage-styled';
import NoPicture from '../assets/img/nopicture.jpg';

//import { useMyContext } from '../application/Provider';
import Pilot from '../components/Pilot';
//import PilotLink from '../components/PilotLink';
import Film from '../components/Film';
//import FilmLink from '../components/FilmLink';

const ShipPage = () => {
    const { id } = useParams();
    //const [state, setState] = useMyContext();

    const [shipData, setShipData] = useState({});
    const [pictStatus, setPictStatus] = useState("404");

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}/`)
            .then(res => {
                //console.log(id, { res });
                setShipData(res.data);
            })
            .catch(err => console.log('error', err))
    }, [])

    const URL_IMG = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    useEffect(() => {
        fetch(URL_IMG)
            .then(res => {
                //console.log({ res });
                setPictStatus(res.status);
            })
            .catch(err => console.log('error', err))
    }, [])

    const shipInfo = { ...shipData }
    //console.log({ shipInfo });

    const showPicture = (pictStatus) => {
        if (pictStatus === 200) {
            return < ImageShip src={URL_IMG} alt={shipInfo.name} />
        } else if (pictStatus === 404) {
            return <ImageShip src={NoPicture} alt="Generic" />
        } else {
            return <Loading />
        }
    }

    const pilotsArr = shipInfo.pilots;
    //console.log({ pilotsArr });
    let pilots = "";
    if (typeof pilotsArr !== 'undefined' && pilotsArr.length > 0) {
        pilots = pilotsArr.map((pilot) => {
            const piloturlArr = pilot.split("/");
            const numPilot = piloturlArr[piloturlArr.length - 2];
            //console.log(numPilot);
            //return <PilotLink key={numPilot} idPilot={numPilot} />
            return <Pilot key={numPilot} idPilot={numPilot} />
        })
    } else {
        pilots = <InfoTxt> </InfoTxt>;
    }

    const filmsArr = shipInfo.films;
    //console.log({ filmsArr });
    let films = "";
    if (typeof filmsArr !== 'undefined' && filmsArr.length > 0) {
        films = filmsArr.map((film) => {
            const filmurlArr = film.split("/");
            const numFilm = filmurlArr[filmurlArr.length - 2];
            //console.log(numFilm);
            //return <FilmLink key={numFilm} idFilm={numFilm} />
            return <Film key={numFilm} idFilm={numFilm} />
        })
    } else {
        films = <InfoTxt> </InfoTxt>;
    }

    return (
        <DivShip>

            {!shipInfo.name
                ? <Loading />
                : (<>
                    <ShipTitle>{shipInfo.name}</ShipTitle>
                    <ImageContainer>
                        {showPicture(pictStatus)}

                    </ImageContainer>
                    <div>
                        <DivTextCentered>
                            <div>
                                <p>MODEL: <InfoTxt>{shipInfo.model}</InfoTxt></p>
                                <p>STARSHIP CLASS: <InfoTxt>{shipInfo.starship_class}</InfoTxt></p>
                                <p>MANUFACTURER: <InfoTxt>{shipInfo.manufacturer}</InfoTxt></p>
                                <p>COST: <InfoTxt>{shipInfo.cost_in_credits}</InfoTxt></p>
                            </div>
                        </DivTextCentered>

                        <DivGrid>
                            <div>
                                <p>CREW: <InfoTxt>{shipInfo.crew}</InfoTxt></p>
                                <p>PASSENGER CAPACITY: <InfoTxt>{shipInfo.passengers}</InfoTxt></p>
                                <p>CARGO CAPACITY: <InfoTxt>{shipInfo.cargo_capacity}</InfoTxt></p>
                                <p>CONSUMABLES: <InfoTxt>{shipInfo.consumables}</InfoTxt></p>
                                <br />

                                <br />
                            </div>
                            <div>
                                <p>LENGTH: <InfoTxt>{shipInfo.length}</InfoTxt></p>
                                <p>MAXIMUM ATMOSPHERING SPEED: <InfoTxt>{shipInfo.max_atmosphering_speed}</InfoTxt></p>
                                <p>HYPERDRIVE RATING: <InfoTxt>{shipInfo.hyperdrive_rating}</InfoTxt></p>
                                <p>MAXIMUM SPEED IN REALSPACE: <InfoTxt>{shipInfo.max_atmosphering_speed}</InfoTxt></p>

                            </div>
                        </DivGrid>

                        <DivFilmsPilots>
                            {shipInfo.pilots.length > 0 && <SubTitle>PILOTS:</SubTitle>}
                            <DivPosters>{pilots}</DivPosters>
                        </DivFilmsPilots>

                        <DivFilmsPilots>
                            <SubTitle>FILMS:</SubTitle>
                            <DivPosters>{films}</DivPosters>
                        </DivFilmsPilots>
                    </div>
                </>)}
        </DivShip>
    )
}
export default ShipPage;

/* //alternativa al get the axios, traer datos objeto con Link y state
    let { state } = useLocation(); 
    console.log({ state }, { id })
    const shipData = state.shipInfo;
    */