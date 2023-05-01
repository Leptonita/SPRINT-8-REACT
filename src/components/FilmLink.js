import { useMyContext } from '../application/Provider';
import { DivPilotLink, ImgPilotLink } from './PilotLink-styled';
import { Link } from 'react-router-dom';

const FilmLink = ({ idFilm }) => {
    const [state, setState] = useMyContext();

    const IMGPHOTOSRC = "https://starwars-visualguide.com/assets/img/films/";

    return (
        <DivPilotLink>
            <Link to={`/film/${idFilm}`}>
                <ImgPilotLink src={IMGPHOTOSRC + idFilm + ".jpg"} alt={"Film" + { idFilm }} />
            </Link>
        </DivPilotLink>
    )
}
export default FilmLink;