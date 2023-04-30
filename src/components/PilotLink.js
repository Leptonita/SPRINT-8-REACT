import { useMyContext } from '../application/Provider';
import { DivPilotLink, ImgPilotLink } from './PilotLink-styled';
import { Link } from 'react-router-dom';

const PilotLink = ({ idPilot }) => {
    const [state, setState] = useMyContext();

    const IMGPHOTOSRC = "https://starwars-visualguide.com/assets/img/characters/";

    return (
        <DivPilotLink>
            <Link to={`/pilot/${idPilot}`}>
                <ImgPilotLink src={IMGPHOTOSRC + idPilot + ".jpg"} alt={"Pilot" + { idPilot }} />
            </Link>
        </DivPilotLink>
    )
}
export default PilotLink;