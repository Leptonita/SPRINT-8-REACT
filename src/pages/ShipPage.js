//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import { DivShip, ShipTitle, ImageShip, ImageContainer, DivTextCentered, DivGrid, InfoTxt } from './ShipPage-styled';
import NoPicture from '../assets/img/nopicture.jpg';

//https://swapi.dev/api/starships
//const instance = axios.create({ baseURL: 'https://swapi.py4e.com/api/starships' });


const ShipPage = () => {
    const { id } = useParams();

    const [shipData, setShipData] = useState({});
    const [pictStatus, setPictStatus] = useState("404");

    useEffect(() => {
        axios
            .get(`https://swapi.py4e.com/api/starships/${id}/`)
            .then(res => {
                console.log(id, { res });
                setShipData(res.data);
            })
            .catch(err => console.log('error', err))
    }, [])

    const URL_IMG = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;

    useEffect(() => {
        fetch(URL_IMG)
            .then(res => {
                console.log({ res });
                setPictStatus(res.status);
            })
            .catch(err => console.log('error', err))
    }, [])

    const shipInfo = { ...shipData }
    console.log(shipInfo);

    return (
        <DivShip>

            {shipData.length === 0
                ? <Loading />
                : (<>
                    <ShipTitle>{shipInfo.name}</ShipTitle>
                    <ImageContainer>
                        {pictStatus === 200
                            ? < ImageShip src={URL_IMG} alt={shipInfo.name} />
                            : <ImageShip src={NoPicture} alt="Generic" />
                        }
                    </ImageContainer>
                    <DivTextCentered>
                        <p>MODEL: <InfoTxt>{shipInfo.model}</InfoTxt></p>
                        <p>STARSHIP CLASS: <InfoTxt>{shipInfo.starship_class}</InfoTxt></p>
                        <p>MANUFACTURER: <InfoTxt>{shipInfo.manufacturer}</InfoTxt></p>
                        <p>COST: <InfoTxt>{shipInfo.cost_in_credits}</InfoTxt></p>
                    </DivTextCentered>

                    <DivGrid>
                        <div>
                            <p>CREW: <InfoTxt>{shipInfo.crew}</InfoTxt></p>
                            <p>PASSENGER CAPACITY: <InfoTxt>{shipInfo.passengers}</InfoTxt></p>
                            <p>CARGO CAPACITY: <InfoTxt>{shipInfo.cargo_capacity}</InfoTxt></p>
                            <p>CONSUMABLES: <InfoTxt>{shipInfo.consumables}</InfoTxt></p>
                            <br />
                            <p>PILOTS: <InfoTxt>--</InfoTxt> </p>
                            <p>FILMS: <InfoTxt>--</InfoTxt> </p>
                            <br />

                        </div>
                        <div>
                            <p>LENGTH: <InfoTxt>{shipInfo.length}</InfoTxt></p>
                            <p>MAXIMUM ATMOSPHERING SPEED: <InfoTxt>{shipInfo.max_atmosphering_speed}</InfoTxt></p>
                            <p>HYPERDRIVE RATING: <InfoTxt>{shipInfo.hyperdrive_rating}</InfoTxt></p>
                            <p>MAXIMUM SPEED IN REALSPACE: <InfoTxt>{shipInfo.max_atmosphering_speed}</InfoTxt></p>

                        </div>
                    </DivGrid>
                </>)}
        </DivShip>
    )
}
export default ShipPage;

/* //con traer datos objeto con Link y state
    let { state } = useLocation(); 
    console.log({ state }, { id })
    const shipData = state.shipInfo;
    */